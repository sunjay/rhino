#![feature(proc_macro)]

#[macro_use]
extern crate serde_derive;

extern crate serde;
extern crate serde_json;
extern crate rustc_serialize;

extern crate image;

mod action;
mod project;
mod commands;

use std::io;
use std::io::BufRead;
use std::error::Error;

use action::Action;
use project::Project;
use commands::CommandResult;

#[derive(Debug, PartialEq, Serialize)]
pub enum Response {
    Success {/*TODO*/},
    NoProjectCreated,
    ActionParseError {error: String},
    ActionFailed {reason: String},
}

fn main() {
    let mut project: Option<Project> = None;

    let stdin = io::stdin();
    for line in stdin.lock().lines() {
        let line = line.unwrap();
        let line = line.trim();
        let action: Action = match serde_json::from_str(&line) {
            Ok(a) => a,
            Err(error) => {
                let description = error.description().to_owned();
                let response = Response::ActionParseError {error: description};
                send_response(response);
                continue;
            }
        };

        if let Action::New {width, height} = action {
            project = Some(Project::new(width, height));
            send_response(Response::Success {/*TODO*/});
            continue;
        }

        if let Some(ref mut project) = project {
            let result = dispatch_action(project, action);
            match result {
                Ok(_) => send_response(Response::Success {/*TODO*/}),
                Err(error) => send_response(Response::ActionFailed {reason: error}),
            }
        }
        else {
            send_response(Response::NoProjectCreated);
        }
    }
}

fn dispatch_action(project: &mut Project, action: Action) -> CommandResult {
    match action {
        Action::Load {ref path} => project.load(path),
        Action::Save {ref path} => project.save(path),
        Action::Undo => project.undo(),
        Action::Redo => project.redo(),
        a => project.perform_command(commands::lookup(a)),
    }
}

fn send_response(response: Response) {
    // If this formatting fails, we can't really recover, so we're
    // just using unwrap()
    println!("{}", serde_json::to_string(&response).unwrap());
}
