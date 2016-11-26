use project::Project;

use super::{Command, CommandResult};

pub struct FlipHorizontal;

impl FlipHorizontal {
    pub fn new() -> FlipHorizontal {
        FlipHorizontal
    }
}

impl Command for FlipHorizontal {
    fn forward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.fliph());
        Ok(())
    }

    fn backward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.fliph());
        Ok(())
    }
}
