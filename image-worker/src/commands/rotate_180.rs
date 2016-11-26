use project::Project;

use super::{Command, CommandResult};

pub struct Rotate180;

impl Rotate180 {
    pub fn new() -> Rotate180 {
        Rotate180
    }
}

impl Command for Rotate180 {
    fn forward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.rotate180());
        Ok(())
    }

    fn backward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.rotate180());
        Ok(())
    }
}
