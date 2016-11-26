# Disallow before loading anything
"Rotate90"
>"NoProjectCreated"

# Multiple rotations
{"Load": {"path": "tests/assets/sample3.png"}}
"Rotate90"
{"Save": {"path": "rotate_90.png"}}
%rotate_90.png => tests/assets/rotate_90-s3.png
"Rotate90"
{"Save": {"path": "rotate_90.png"}}
%rotate_90.png => tests/assets/rotate_90-s3-2.png
"Rotate90"
{"Save": {"path": "rotate_90.png"}}
%rotate_90.png => tests/assets/rotate_90-s3-3.png
"Rotate90"
{"Save": {"path": "rotate_90.png"}}
%rotate_90.png => tests/assets/rotate_90-s3-4.png

# Single rotation

{"Load": {"path": "tests/assets/sample.jpg"}}
"Rotate90"
{"Save": {"path": "rotate_90.png"}}
%rotate_90.png => tests/assets/rotate_90-s.png

{"Load": {"path": "tests/assets/sample2.jpg"}}
"Rotate90"
{"Save": {"path": "rotate_90.png"}}
%rotate_90.png => tests/assets/rotate_90-s2.png
