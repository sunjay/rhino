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

use action::Action;
use project::Project;
use commands::{Command, CommandResult};

#[derive(Debug, PartialEq, Serialize)]
pub enum Response {
    Success {/*TODO*/},
    NoProjectCreated,
    ActionParseError {/*TODO*/},
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
                //TODO: Output error response
                unimplemented!();
                continue;
            }
        };

        if let Action::New {width, height} = action {
            project = Some(Project::new(width, height));
            continue;
        }

        if let Some(ref mut project) = project {
            let result: CommandResult = match action {
                Action::Load {path} => project.load(path),
                Action::Save {path} => project.save(path),
                Action::Undo => project.undo(),
                Action::Redo => project.redo(),
                a => project.perform_command(commands::lookup(a)),
            };
        }
        else {
            //TODO: Output error response that no project has been created or opened yet
            unimplemented!();
        }
    }
}
