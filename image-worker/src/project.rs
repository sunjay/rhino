use std::path::Path;

use image::{self, DynamicImage, ImageFormat};

use commands::{Command, CommandResult};

pub struct Project {
    image: DynamicImage,
    // undo stack has latest command at the end
    // and oldest command at the beginning
    undo_stack: Vec<Box<Command>>,
    // redo stack is emptied every time a command
    // is performed
    // otherwise it contains the most recently undone
    // command at the top (last item)
    redo_stack: Vec<Box<Command>>,
}

impl Project {
    pub fn new(width: u32, height: u32) -> Project {
        Project::from_image(DynamicImage::new_rgba8(width, height))
    }

    pub fn load(path: &str) -> Result<Project, String> {
        let path = Path::new(path);
        let image = image::open(path).map_err(|e| format!("{}", e))?;

        Ok(Project::from_image(image))
    }

    pub fn from_image(image: DynamicImage) -> Project {
        Project {
            image: image,
            undo_stack: Vec::new(),
            redo_stack: Vec::new(),
        }
    }

    pub fn save(&mut self, path: &str) -> CommandResult {
        unimplemented!();
    }

    pub fn perform_command(&mut self, command: Box<Command>) -> CommandResult {
        command.forward(self)?;
        self.undo_stack.push(command);
        self.redo_stack.clear();

        Ok(())
    }

    pub fn undo(&mut self) -> CommandResult {
        if self.undo_stack.is_empty() {
            return Err("Nothing to undo".to_owned());
        }

        let command = self.undo_stack.pop().unwrap();
        command.backward(self)?;

        self.redo_stack.push(command);

        Ok(())
    }

    pub fn redo(&mut self) -> CommandResult {
        if self.redo_stack.is_empty() {
            return Err("Nothing to redo".to_owned());
        }

        let command = self.redo_stack.pop().unwrap();
        command.forward(self)?;

        self.undo_stack.push(command);

        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
}
