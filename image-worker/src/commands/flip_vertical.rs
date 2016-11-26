use project::Project;

use super::{Command, CommandResult};

pub struct FlipVertical;

impl FlipVertical {
    pub fn new() -> FlipVertical {
        FlipVertical
    }
}

impl Command for FlipVertical {
    fn forward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.flipv());
        Ok(())
    }

    fn backward(&self, project: &mut Project) -> CommandResult {
        project.apply_to_image(|img| img.flipv());
        Ok(())
    }
}
