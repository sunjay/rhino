use action::Action;
use commands::Command;

pub struct Project<'a> {
    // undo stack has latest command at the end
    // and oldest command at the beginning
    undo_stack: Vec<&'a Command>,
    // redo stack is emptied every time an action
    // is performed
    // otherwise it contains the most recently undone
    // command at the top (last item)
    redo_stack: Vec<&'a Command>,
}

impl Project {
    fn perform_action(&mut self, action: Action) {
        self.redo_stack.clear();
    }

    fn undo(&mut self) {
        //TODO: Deal with empty
        let command = self.undo_stack.pop();
        command.backward(&mut self);
        self.redo_stack.push(command);
    }

    fn redo(&mut self) {
        //TODO: Deal with empty
        let command = self.redo_stack.pop();
        command.forward(&mut self);
        self.undo_stack.push(command);
    }
}

#[cfg(test)]
mod tests {
    use super::*;
}
