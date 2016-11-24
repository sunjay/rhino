use std::cell::RefCell;

use image::DynamicImage;

use project::Project;

use super::{Command, CommandResult};

pub struct Crop {
   x: u32,
   y: u32,
   width: u32,
   height: u32,
   previous_image: RefCell<Option<DynamicImage>>,
}

impl Crop {
    pub fn new(x: u32, y: u32, width: u32, height: u32) -> Crop {
        Crop {
            x: x,
            y: y,
            width: width,
            height: height,
            previous_image: RefCell::new(None),
        }
    }
}

impl Command for Crop {
    fn forward(&self, project: &mut Project) -> CommandResult {
        *(self.previous_image.borrow_mut()) = Some(project.get_image().clone());

        project.apply_to_image(|img| img.crop(self.x, self.y, self.width, self.height));
        Ok(())
    }

    fn backward(&self, project: &mut Project) -> CommandResult {
        let image = self.previous_image.borrow_mut().take().unwrap();
        project.apply_to_image(move |_| image);
        Ok(())
    }
}
