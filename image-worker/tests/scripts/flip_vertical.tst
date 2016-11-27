# Disallow before loading anything
"FlipVertical"
>"NoProjectCreated"

# Multiple flips
{"Load": {"path": "tests/assets/sample3.png"}}
"FlipVertical"
{"Save": {"path": "flip_vertical.png"}}
%flip_vertical.png => tests/assets/flip_vertical-s3.png
"FlipVertical"
{"Save": {"path": "flip_vertical.png"}}
%flip_vertical.png => tests/assets/flip_vertical-s3-2.png

# Test Undo/Redo of last action
"Undo"
{"Save": {"path": "flip_vertical.png"}}
%flip_vertical.png => tests/assets/flip_vertical-s3.png
"Redo"
{"Save": {"path": "flip_vertical.png"}}
%flip_vertical.png => tests/assets/flip_vertical-s3-2.png

# Single flip

{"Load": {"path": "tests/assets/sample.jpg"}}
"FlipVertical"
{"Save": {"path": "flip_vertical.png"}}
%flip_vertical.png => tests/assets/flip_vertical-s.png

{"Load": {"path": "tests/assets/sample2.jpg"}}
"FlipVertical"
{"Save": {"path": "flip_vertical.png"}}
%flip_vertical.png => tests/assets/flip_vertical-s2.png
