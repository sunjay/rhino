#[derive(Debug, PartialEq, Serialize, Deserialize)]
pub enum Direction {
    N, NE, E, SE, S, SW, W, NW,
}

#[derive(Debug, PartialEq, Serialize, Deserialize)]
pub enum Action {
    New {width: u32, height: u32},
    // full path including extension
    Load {path: String},
    Save {path: String},
    Undo,
    Redo,
    Crop {x: u32, y: u32, width: u32, height: u32},
    FlipHorizontal,
    FlipVertical,
    Resize {width: u32, height: u32},
    ResizeCanvas {width: u32, height: u32, anchor: Direction},
    Rotate90Clockwise,
    Rotate90Counterclockwise,
    Rotate180,
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json;

    // Need to verify assumptions about JSON serialization since this is widely used in
    // a client library

    #[test]
    fn json_new() {
        test_json(
            Action::New { width: 150, height: 250 },
            "{\"New\":{\"width\":150,\"height\":250}}"
        );
    }

    #[test]
    fn json_load() {
        test_json(
            Action::Load { path: "images/folder/foo.jpg".to_owned() },
            "{\"Load\":{\"path\":\"images/folder/foo.jpg\"}}"
        );
    }

    #[test]
    fn json_save() {
        test_json(
            Action::Save { path: "images/folder/bar.png".to_owned() },
            "{\"Save\":{\"path\":\"images/folder/bar.png\"}}"
        );
    }

    #[test]
    fn json_undo() {
        test_json(
            Action::Undo,
            "\"Undo\""
        );
    }

    #[test]
    fn json_redo() {
        test_json(
            Action::Redo,
            "\"Redo\""
        );
    }

    #[test]
    fn json_crop() {
        test_json(
            Action::Crop { x: 10, y: 11, width: 100, height: 150 },
            "{\"Crop\":{\"x\":10,\"y\":11,\"width\":100,\"height\":150}}"
        );
    }

    #[test]
    fn json_flip_horizontal() {
        test_json(
            Action::FlipHorizontal,
            "\"FlipHorizontal\""
        );
    }

    #[test]
    fn json_flip_vertical() {
        test_json(
            Action::FlipVertical,
            "\"FlipVertical\""
        );
    }

    #[test]
    fn json_resize() {
        test_json(
            Action::Resize { width: 250, height: 550 },
            "{\"Resize\":{\"width\":250,\"height\":550}}"
        );
    }

    #[test]
    fn json_resize_canvas() {
        test_json(
            Action::ResizeCanvas { width: 250, height: 550, anchor: Direction::NE },
            "{\"ResizeCanvas\":{\"width\":250,\"height\":550,\"anchor\":\"NE\"}}"
        );
    }

    #[test]
    fn json_rotate_90_clockwise() {
        test_json(
            Action::Rotate90Clockwise,
            "\"Rotate90Clockwise\""
        );
    }

    #[test]
    fn json_rotate_90_counterclockwise() {
        test_json(
            Action::Rotate90Counterclockwise,
            "\"Rotate90Counterclockwise\""
        );
    }

    #[test]
    fn json_rotate_180() {
        test_json(
            Action::Rotate180,
            "\"Rotate180\""
        );
    }

    fn test_json(action: Action, expected: &'static str) {
        assert_eq!(serde_json::to_string(&action).unwrap(), expected);
    }
}
