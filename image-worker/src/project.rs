use commands::Command;

// Unrelated error types that should not be grouped
// into one enum
pub struct UndoStackEmpty;
pub struct RedoStackEmpty;
pub struct LoadFailed {
    reason: &'static str,
}
pub struct SaveFailed {
    reason: &'static str,
}

// The result of a mutation either succeeds or fails with
// some error type
pub type MutationResult<E> = Result<(), E>;

pub struct Project<'a> {
    // undo stack has latest command at the end
    // and oldest command at the beginning
    undo_stack: Vec<&'a Command>,
    // redo stack is emptied every time a command
    // is performed
    // otherwise it contains the most recently undone
    // command at the top (last item)
    redo_stack: Vec<&'a Command>,
}

impl<'a> Project<'a> {
    pub fn new(width: u32, height: u32) -> Project<'a> {
        Project {
            undo_stack: Vec::new(),
            redo_stack: Vec::new(),
        }
    }

    pub fn perform_command(&mut self, command: Command) {
        command.forward(self);
        self.undo_stack.push(command);
        self.redo_stack.clear();
    }

    pub fn undo(&mut self) -> MutationResult<UndoStackEmpty> {
        if self.undo_stack.is_empty() {
            return Err(UndoStackEmpty);
        }

        let command = self.undo_stack.pop().unwrap();
        command.backward(self);
        self.redo_stack.push(command);

        Ok(())
    }

    pub fn redo(&mut self) -> MutationResult<RedoStackEmpty> {
        if self.redo_stack.is_empty() {
            return Err(RedoStackEmpty);
        }

        let command = self.redo_stack.pop().unwrap();
        command.forward(self);
        self.undo_stack.push(command);

        Ok(())
    }

    pub fn load(&mut self, path: String) -> MutationResult<LoadFailed> {
        unimplemented!();
    }

    pub fn save(&mut self, path: String) -> MutationResult<SaveFailed> {
        unimplemented!();
    }
}

#[cfg(test)]
mod tests {
    use super::*;
}
