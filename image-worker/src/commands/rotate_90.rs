use project::Project;

use super::{Command, CommandResult};

pub struct Rotate90;

impl Rotate90 {
    pub fn new() -> Rotate90 {
        Rotate90
    }
}

impl Command for Rotate90 {
    fn forward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.rotate90());
        Ok(())
    }

    fn backward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.rotate270());
        Ok(())
    }
}
