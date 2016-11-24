//! This integration test runs the test scripts found in
//! the scripts/ directory
//! Each test script specifies input JSON to send and optionally
//! the JSON output it expects to receive
//! Scripts can assert that produced images are the same as other
//! provided image files
//! Scripts should keep all paths relative to the image-worker/
//! directory
//! We will assert after sending each command that the response
//! received is Success
//!
//! ## Syntax
//! Most lines in a test script are just JSON that represents
//! some input to pass to the worker process.
//!
//! ```
//! {"Load": {"path": "tests/assets/sample.jpg"}}
//! {"Crop": {"x": 900, "y": 800, "width": 640, "height": 480}}
//! {"Save": {"path": "output.jpg"}}
//! ```
//!
//! You can assert that the output image is as expected:
//!
//! ```
//! %output.jpg => tests/assets/crop-640x480+900+800.jpg
//! ```
//!
//! This will automatically delete output.jpg so you do not
//! need to clean up after the test.
//! If a mismatch occurs, the image will not be deleted.
//!
//! To just clean the output file and do no checks:
//!
//! ```
//! -output.jpg
//! ```
//!
//! To inspect a file that you're about to clean up, you
//! can copy it with the following command:
//!
//! ```
//! =output.jpg destination.jpg
//! ```
//!
//! This is useful for debugging.
//!
//! You can assert that the output of a given input line
//! is as expected:
//!
//! ```
//! >{"Success": {...whatever you expect here...}}
//! ```
//!
//! If you provide this, we will not check the output
//! for anything other than it matches this. That means
//! you can account for failures explicitly.
//!
//! With no expected output provided, we will check to
//! see if the output was a success and that is it.
//!
//! Lines beginning with `#` will be ignored. You can
//! use these lines to document your test scripts as
//! necessary.
//!
//! # Your comment here

extern crate image;

use std::fs::{File, read_dir, remove_file, copy};
use std::io::{BufReader, BufRead, Write};
use std::path::{Path, PathBuf};
use std::process::Child;
use std::process::{Command, Stdio};

#[test]
fn run_scripts() {
    let scripts_dir = Path::new(file!()).with_file_name("scripts");

    for entry in read_dir(scripts_dir).unwrap() {
        let test_script = entry.unwrap().path();
        run_test_script(test_script);
    }
}

fn run_test_script(script: PathBuf) {
    let file = File::open(script.clone()).unwrap();
    let reader = BufReader::new(file);

    let mut child = spawn_worker();

    let filename = script.file_name().unwrap().to_str().unwrap();

    let mut last_response: Option<String> = None;
    for (num, line) in reader.lines().enumerate() {
        let line = line.unwrap();
        let line = line.trim();

        if line.is_empty() {
            continue;
        }

        let (first, arg) = line.split_at(1);

        let result = match first {
            "%" => assert_file_match(arg),
            "-" => remove_file(arg.trim()).map_err(|e| format!("{}", e)),
            "=" => copy_file(arg),
            ">" => {
                let res = assert_output(last_response.as_ref(), arg);
                last_response = None;
                res
            },
            "#" => Ok(()),
            _ => {
                // The test script has until the next command to check its output using the
                // > command. If they do not, we will check here for success
                let response_checked = if last_response.is_some() {
                    assert_success(last_response.as_ref())
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
            panic!("{}#{}: {}", filename, num + 1, error);
        }
    }

    assert!(child.wait().unwrap().success(),
        format!("{}: Worker process did not complete successfully after test script", filename));
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

fn assert_file_match(arg: &str) -> Result<(), String> {
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

fn assert_success(output: Option<&String>) -> Result<(), String> {
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
        panic!("assert_success should have been called only when last_response had a value");
    }
}

fn assert_output(output: Option<&String>, arg: &str) -> Result<(), String> {
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
        panic!("assert_success should have been called only when last_response had a value");
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
