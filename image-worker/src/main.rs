#![feature(proc_macro)]

#[macro_use]
extern crate serde_derive;

extern crate serde;
extern crate serde_json;

extern crate image;

mod action;
mod project;
mod commands;

use std::io;
use std::io::BufRead;

use action::Action;
use project::Project;
use commands::CommandResult;

#[derive(Debug, PartialEq, Serialize)]
pub enum Response {
    // Success messages
    Success {data: Vec<u8>},
    ProjectClosed,

    // Failures
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
                let response = Response::ActionParseError {error: format!("{}", error)};
                send_response(response);
                continue;
            }
        };

        if let Action::New {width, height} = action {
            project = Some(Project::new(width, height));
            send_success(project.as_ref().unwrap());
        }
        else if let Action::Load {ref path} = action {
            match Project::load(path) {
                Ok(p) => {
                    project = Some(p);
                    send_success(project.as_ref().unwrap());
                },
                Err(error) => send_response(Response::ActionFailed {reason: error}),
            }
        }
        else if let Action::Close = action {
            project = None;
            send_response(Response::ProjectClosed);
        }
        // The remaining actions require the project to be created in advance
        else if let Some(ref mut project) = project {
            let result = dispatch_action(project, action);
            match result {
                Ok(_) => send_success(&project),
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
        Action::Save {ref path} => project.save(path),
        Action::Undo => project.undo(),
        Action::Redo => project.redo(),
        a => project.perform_command(commands::lookup(a)),
    }
}

fn send_success(project: &Project) {
    send_response(Response::Success {
        data: project.get_image().raw_pixels(),
    });
}

fn send_response(response: Response) {
    // If this formatting fails, we can't really recover, so we're
    // just using unwrap()
    println!("{}", serde_json::to_string(&response).unwrap());
}
