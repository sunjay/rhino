use action::Action;
use project::Project;

pub trait Command {
    fn forward(&self, project: &mut Project) -> CommandResult;
    fn backward(&self, project: &mut Project) -> CommandResult;
}

// The result of a command either succeeds or fails with
// an error message
pub type CommandResult = Result<(), String>;

pub fn lookup(action: Action) -> Box<Command> {
    match action {
        Crop {x, y, width, height} => unimplemented!(),
        FlipHorizontal => unimplemented!(),
        FlipVertical => unimplemented!(),
        Resize {width, height} => unimplemented!(),
        ResizeCanvas {width, height, anchor} => unimplemented!(),
        Rotate90Clockwise => unimplemented!(),
        Rotate90Counterclockwise => unimplemented!(),
        Rotate180 => unimplemented!(),
        // Some actions are implemented with internal
        // functions so we won't match them here unless
        // we accidentally forgot to add a branch in this
        // match statement for a given action
        _ => unreachable!(),
    }
}
