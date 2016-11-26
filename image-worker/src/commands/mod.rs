mod crop;
mod resize;
mod resize_canvas;
mod flip_horizontal;
mod flip_vertical;
mod rotate_90;
mod rotate_270;
mod rotate_180;

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
        Action::Crop {x, y, width, height} =>
            Box::new(crop::Crop::new(x, y, width, height)),

        Action::FlipHorizontal =>
            Box::new(flip_horizontal::FlipHorizontal::new()),

        Action::FlipVertical =>
            Box::new(flip_vertical::FlipVertical::new()),

        Action::Resize {width, height} =>
            Box::new(resize::Resize::new(width, height)),

        Action::ResizeCanvas {width, height, anchor} =>
            Box::new(resize_canvas::ResizeCanvas::new(width, height, anchor)),

        Action::Rotate90 =>
            Box::new(rotate_90::Rotate90::new()),

        Action::Rotate270 =>
            Box::new(rotate_270::Rotate270::new()),

        Action::Rotate180 =>
            Box::new(rotate_180::Rotate180::new()),

        // Some actions are implemented with internal
        // functions so we won't match them here unless
        // we accidentally forgot to add a branch in this
        // match statement for a given action
        _ => unreachable!(),
    }
}
