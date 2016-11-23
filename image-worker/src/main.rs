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
        let line = line.unwrap().trim();
        let action: Action = match serde_json::from_str(&line) {
            Ok(a) => a,
            Err(error) => {
                //TODO: Output error response
                unimplemented!();
                continue;
            }
        };

        let result: CommandResult = match action {
            Action::New {width, height} => project = Project::new(width, height),
            Action::Load {path} => project.load(path),
            Action::Save {path} => project.save(path),
            Action::Undo => project.undo(),
            Action::Redo => project.redo(),
            a => project.perform_command(commands::lookup(action)),
        };
    }
}
