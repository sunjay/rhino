use std::cell::RefCell;

use image::{DynamicImage, FilterType};

use project::Project;

use super::{Command, CommandResult};

pub struct Resize {
    width: u32,
    height: u32,
    previous_image: RefCell<Option<DynamicImage>>,
}

impl Resize {
    pub fn new(width: u32, height: u32) -> Resize {
        Resize {
            width: width,
            height: height,
            previous_image: RefCell::new(None),
        }
    }
}

impl Command for Resize {
    fn forward(&self, project: &mut Project) -> CommandResult {
        *(self.previous_image.borrow_mut()) = Some(project.get_image().clone());

        project.apply_to_image(|img|
            img.resize_exact(self.width, self.height, FilterType::Lanczos3));
        Ok(())
    }

    fn backward(&self, project: &mut Project) -> CommandResult {
        let image = self.previous_image.borrow_mut().take().unwrap();
        project.apply_to_image(move |_| image);
        Ok(())
    }
}
