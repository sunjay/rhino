# Disallow before loading anything
"FlipHorizontal"
>"NoProjectCreated"

# Multiple flips
{"Load": {"path": "tests/assets/sample3.png"}}
"FlipHorizontal"
{"Save": {"path": "flip_horizontal.png"}}
%flip_horizontal.png => tests/assets/flip_horizontal-s3.png
"FlipHorizontal"
{"Save": {"path": "flip_horizontal.png"}}
%flip_horizontal.png => tests/assets/flip_horizontal-s3-2.png

# Single flip

{"Load": {"path": "tests/assets/sample.jpg"}}
"FlipHorizontal"
{"Save": {"path": "flip_horizontal.png"}}
%flip_horizontal.png => tests/assets/flip_horizontal-s.png

{"Load": {"path": "tests/assets/sample2.jpg"}}
"FlipHorizontal"
{"Save": {"path": "flip_horizontal.png"}}
%flip_horizontal.png => tests/assets/flip_horizontal-s2.png
