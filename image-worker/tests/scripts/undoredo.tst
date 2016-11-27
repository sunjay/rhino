# Disallow before loading anything
"Undo"
>"NoProjectCreated"
"Redo"
>"NoProjectCreated"

# Disallow right after loading (when there is still no undo history)
{"Load": {"path": "tests/assets/sample3.png"}}
# Note that there is a project now, but still no undo history
# That makes the error different
"Undo"
>{"ActionFailed":{"reason":"Nothing to undo"}}
"Redo"
>{"ActionFailed":{"reason":"Nothing to redo"}}

# Disallow after a save (since this doesn't effect undo history)
{"Save": {"path": "undoredo.png"}}
"Undo"
>{"ActionFailed":{"reason":"Nothing to undo"}}
"Redo"
>{"ActionFailed":{"reason":"Nothing to redo"}}
-undoredo.png

# Create some undo history
"Rotate90"
"Rotate180"

# The actual correctness checks for the specific undo implementation
# of these commands are in the tests for each command

# All the way back to the beginning
"Undo"
"Undo"
# Too far
"Undo"
>{"ActionFailed":{"reason":"Nothing to undo"}}
"Redo"
"Redo"
# Too far
"Redo"
>{"ActionFailed":{"reason":"Nothing to redo"}}

# Should be at the top of the undo stack right now
# That means that there is nothing to redo right now
# Mixing undo and redo in different ways
"Undo"
"Redo"
"Undo"
"Redo"
"Undo"
"Redo"
"Undo"
"Undo"
"Redo"
"Undo"
"Redo"
"Redo"

# Ensure we reached the top of the undo stack again
"Redo"
>{"ActionFailed":{"reason":"Nothing to redo"}}

# At this point, there is some undo history, but close
# should destroy all of that, so this should fail
"Close"
>"ProjectClosed"
"Undo"
>"NoProjectCreated"
"Redo"
>"NoProjectCreated"
