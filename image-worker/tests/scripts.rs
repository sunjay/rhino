//! This integration test runs the test scripts found in
//! the scripts/ directory
//! See image-worker/README.md for a full description of
//! the test script syntax and details about this test
//! runner.

extern crate image;

use std::fs::{File, read_dir, remove_file, copy};
use std::io::{BufReader, BufRead, Write};
use std::path::{Path, PathBuf};
use std::process::Child;
use std::process::{Command, Stdio};
use std::thread;
use std::sync::mpsc;

#[test]
fn run_scripts() {
    let scripts_dir = Path::new(file!()).with_file_name("scripts");

    let mut threads = Vec::new();

    // We use channels here so we can immediately exit if we get
    // a failure message
    let (tx, rx) = mpsc::channel();

    for entry in read_dir(scripts_dir).unwrap() {
        let test_script = entry.unwrap().path();

        let tx = tx.clone();
        let th = (test_script.clone(), thread::spawn(move || {
            let result = run_test_script(test_script);
            tx.send(result).unwrap();
        }));
        threads.push(th);
    }

    for _ in threads.iter() {
        let result = rx.recv().unwrap();
        match result {
            Err(error) => panic!(error),
            _ => (),
        }
    }

    for (script, th) in threads {
        match th.join() {
            Ok(_) => (),
            Err(_) => panic!("thread for {} ended in a panic", script.to_str().unwrap()),
        }
    }
}

fn run_test_script(script: PathBuf) -> Result<(), String> {
    let file = File::open(script.clone()).unwrap();
    let reader = BufReader::new(file);

    let mut child = spawn_worker();

    let filename = script.file_name().unwrap().to_str().unwrap();
    println!("Starting {}...", filename);

    let mut last_response: Option<String> = None;
    for (num, line) in reader.lines().enumerate() {
        let line = line.unwrap();
        let line = line.trim();

        if line.is_empty() {
            continue;
        }
        //println!("{}", line);

        let (first, arg) = line.split_at(1);

        let result = match first {
            "%" => check_file_match(arg),
            "-" => remove_file(arg.trim()).map_err(|e| format!("{}", e)),
            "=" => copy_file(arg),
            ">" => {
                let res = check_output(last_response.as_ref(), arg);
                last_response = None;
                res
            },
            "#" => Ok(()),
            _ => {
                // The test script has until the next command to check its output using the
                // > command. If they do not, we will check here for success
                let response_checked = if last_response.is_some() {
                    check_success(last_response.as_ref())
                }
                else {
                    Ok(())
                };

                response_checked.and_then(|_| {
                    send_input(&mut child, line).and_then(|_| {
                        last_response = Some(read_output(&mut child)?);
                        Ok(())
                    })
                })
            },
        };

        if let Err(error) = result {
            return Err(format!("{}#{}: {}", filename, num + 1, error));
        }
    }

    if last_response.is_some() {
        if let Err(error) = check_success(last_response.as_ref()) {
            return Err(format!("{}#EOF: {}", filename, error));
        }
    }

    if !child.wait().unwrap().success() {
        return Err(
            format!("{}: Worker process did not complete successfully after test script", filename)
        );
    }

    println!("Completed {}.", filename);

    Ok(())
}

fn spawn_worker() -> Child {
    Command::new("cargo")
        .args(&["run", "-q"])
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .unwrap()
}

fn check_file_match(arg: &str) -> Result<(), String> {
    let delimiter = arg.find("=>")
        .ok_or("Could not find => in % command")?;
    let (output_path, expected_path) = arg.split_at(delimiter);
    // get rid of the "=>"
    let expected_path = expected_path.chars().skip(2).collect::<String>();

    // ignore any extra whitespace
    let output_path = output_path.trim();
    let expected_path = expected_path.trim();

    let output = image::open(output_path).map_err(|e| format!("{}", e))?;
    let expected = image::open(expected_path).map_err(|e| format!("{}", e))?;

    let output = output.raw_pixels();
    let expected = expected.raw_pixels();

    if output == expected {
        remove_file(output_path)
            .map_err(|e| format!("Failed to remove output after test passed: {}", e))?;
        Ok(())
    }
    else {
        Err(format!("{} did not match {}", output_path, expected_path))
    }
}

fn copy_file(arg: &str) -> Result<(), String> {
    let args: Vec<_> = arg.trim().split_whitespace().collect();
    if args.len() != 2 {
        return Err("= command requires only 2 arguments".to_owned());
    }

    let source = args[0];
    let destination = args[1];
    copy(source, destination).map_err(|e| format!("{}", e))?;

    Ok(())
}

fn check_success(output: Option<&String>) -> Result<(), String> {
    if let Some(response) = output {
        // This check is not foolproof and may eventually cause problems.
        // It is good enough for now though we're running with it
        if response.starts_with("{\"Success\":") {
            Ok(())
        }
        else {
            Err(format!("Worker did not produce Success. Script failed at \
                the last input *before* this line. Actual result: {}", response))
        }
    }
    else {
        panic!("check_success should have been called only when last_response had a value");
    }
}

fn check_output(output: Option<&String>, arg: &str) -> Result<(), String> {
    // This is brittle, but it doesn't seem worth it to implement something
    // more robust for now. You will need to exactly match the output in your
    // test script if you want to test output
    if let Some(response) = output {
        let arg = arg.trim();
        let response = response.trim();
        if response == arg {
            Ok(())
        }
        else {
            Err(format!("Worker produced output not equal to expected output.\
                \nExpected: {:?}\nReceived: {:?}", arg, response))
        }
    }
    else {
        panic!("check_output should have been called only when last_response had a value");
    }
}

fn send_input(child: &mut Child, line: &str) -> Result<(), String> {
    if let Some(ref mut stdin) = child.stdin {
        match write!(stdin, "{}\n", line) {
            Ok(_) => Ok(()),
            Err(error) => Err(format!("{}", error)),
        }
    }
    else {
        // should not happen. This panic is just in case.
        panic!("stdin was not open for writing".to_string());
    }
}

fn read_output(child: &mut Child) -> Result<String, String> {
    let mut stdout = BufReader::new(match child.stdout {
        Some(ref mut handle) => Ok(handle),
        None => Err("Worker child process stdout was never open"),
    }?);
    let mut response = String::new();
    stdout.read_line(&mut response).map_err(|e| format!("{}", e))?;

    Ok(response)
}
