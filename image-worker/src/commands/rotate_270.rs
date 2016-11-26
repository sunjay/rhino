use project::Project;

use super::{Command, CommandResult};

pub struct Rotate270;

impl Rotate270 {
    pub fn new() -> Rotate270 {
        Rotate270
    }
}

impl Command for Rotate270 {
    fn forward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.rotate270());
        Ok(())
    }

    fn backward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.rotate90());
        Ok(())
    }
}
