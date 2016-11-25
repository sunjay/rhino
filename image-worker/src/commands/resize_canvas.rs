use std::cell::RefCell;

use image::{DynamicImage, GenericImage, imageops};

use action::Anchor;
use project::Project;

use super::{Command, CommandResult};

pub struct ResizeCanvas {
    width: u32,
    height: u32,
    anchor: Anchor,
    previous_image: RefCell<Option<DynamicImage>>,
}

impl ResizeCanvas {
    pub fn new(width: u32, height: u32, anchor: Anchor) -> ResizeCanvas {
        ResizeCanvas {
            width: width,
            height: height,
            anchor: anchor,
            previous_image: RefCell::new(None),
        }
    }

    fn compute_offset(
        (iwidth, iheight): (u32, u32),
        cwidth: u32,
        cheight: u32,
        anchor: &Anchor,
    ) -> (u32, u32) {
        // This computes the top left corner where
        // the current project image should be placed

        let center = cwidth / 2 - iwidth / 2;
        let middle = cheight / 2 - iheight / 2;
        let north = 0;
        let south = cheight - iheight;
        let east = cwidth - iwidth;
        let west = 0;
        match *anchor {
            Anchor::N =>
                (center, north),
            Anchor::NE =>
                (east, north),
            Anchor::E =>
                (east, middle),
            Anchor::SE =>
                (east, south),
            Anchor::S =>
                (center, south),
            Anchor::SW =>
                (west, south),
            Anchor::W =>
                (west, middle),
            Anchor::NW =>
                (west, north),
            Anchor::Middle =>
                (center, middle),
        }
    }
}

impl Command for ResizeCanvas {
    fn forward(&self, project: &mut Project) -> CommandResult {
        *(self.previous_image.borrow_mut()) = Some(project.get_image().clone());

        let (x, y) = ResizeCanvas::compute_offset(
            project.get_image().dimensions(),
            self.width,
            self.height,
            &self.anchor
        );

        let mut canvas = DynamicImage::new_rgba8(self.width, self.height);

        project.apply_to_image(|img| {
            imageops::replace(&mut canvas, img, x, y);
            canvas
        });
        Ok(())
    }

    fn backward(&self, project: &mut Project) -> CommandResult {
        let image = self.previous_image.borrow_mut().take().unwrap();
        project.apply_to_image(move |_| image);
        Ok(())
    }
}
