use serde::Serialize;

use action::Action;
use project::Project;

pub trait Command {
    type Error: Serialize;

    fn forward(&self, project: &mut Project) -> CommandResult<Self::Error>;
    fn backward(&self, project: &mut Project) -> CommandResult<Self::Error>;
}

// The result of a command either succeeds or fails with
// some error type
pub type CommandResult<E: Serialize> = Result<(), E>;

pub fn lookup(action: Action) -> Command {
    match action {
        // Some actions are implemented with internal
        // functions so we won't match them here unless
        // we accidentally forgot to add a branch in this
        // match statement for a given action
        _ => unreachable!(),
    }
}
