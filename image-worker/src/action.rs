#[derive(Debug, PartialEq, Serialize, Deserialize)]
pub enum Action {
    New {width: u32, height: u32},
    Undo,
    Redo,
    Crop {x: u32, y: u32, width: u32, height: u32},
    FlipHorizontal,
    FlipVertical,
    Resize {width: u32, height: u32},
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

    fn test_json(action: Action, expected: &'static str) {
        assert_eq!(serde_json::to_string(&action).unwrap(), expected);
    }
}
