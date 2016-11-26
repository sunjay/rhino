use std::cell::RefCell;
use std::cmp::{max, min};

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

    /// This either computes the place where the top left
    /// coordinate where the top image should be placed
    /// on the bottom image, or it represents the
    /// coordinate where the top image should be cropped
    /// in order to fit on the bottom image.
    /// To use this message, compute the min_width, min_height,
    /// max_width, and max_height, and pass them to the function.
    /// Then, if either of the width or height is larger on
    /// the bottom image than the top, crop the top image using
    /// the coordinate returned here that corresponds to the
    /// axis (width or height) that was smaller
    /// If this is confusing, see the usage below.
    fn compute_offset(
        min_width: u32,
        max_width: u32,
        min_height: u32,
        max_height: u32,
        anchor: Anchor,
    ) -> (u32, u32) {

        let center = max_width / 2 - min_width / 2;
        let middle = max_height / 2 - min_height / 2;
        let north = 0;
        let south = max_height - min_height;
        let east = max_width - min_width;
        let west = 0;
        match anchor {
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

        let cwidth = self.width;
        let cheight = self.height;

        let mut canvas = DynamicImage::new_rgba8(cwidth, cheight);

        project.apply_to_image(|img| {
            let (iwidth, iheight) = img.dimensions();

            let (x, y) = ResizeCanvas::compute_offset(
                min(cwidth, iwidth),
                max(cwidth, iwidth),
                min(cheight, iheight),
                max(cheight, iheight),
                self.anchor
            );

            let smaller_width = cwidth < iwidth;
            let smaller_height = cheight < iheight;

            let (crop_x, rep_x) = if smaller_width { (x, 0) } else { (0, x) };
            let (crop_y, rep_y) = if smaller_height { (y, 0) } else { (0, y) };

            if smaller_width || smaller_height {
                let cropped = img.crop(crop_x, crop_y, cwidth, cheight);
                imageops::replace(&mut canvas, &cropped, rep_x, rep_y);
            } else {
                imageops::replace(&mut canvas, img, rep_x, rep_y);
            };

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
