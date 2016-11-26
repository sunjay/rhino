# Disallow before loading anything
"Rotate180"
>"NoProjectCreated"

# Multiple rotations
{"Load": {"path": "tests/assets/sample3.png"}}
"Rotate180"
{"Save": {"path": "rotate_180.png"}}
%rotate_180.png => tests/assets/rotate_180-s3.png
"Rotate180"
{"Save": {"path": "rotate_180.png"}}
%rotate_180.png => tests/assets/rotate_180-s3-2.png
"Rotate180"
{"Save": {"path": "rotate_180.png"}}
%rotate_180.png => tests/assets/rotate_180-s3-3.png
"Rotate180"
{"Save": {"path": "rotate_180.png"}}
%rotate_180.png => tests/assets/rotate_180-s3-4.png

# Single rotation

{"Load": {"path": "tests/assets/sample.jpg"}}
"Rotate180"
{"Save": {"path": "rotate_180.png"}}
%rotate_180.png => tests/assets/rotate_180-s.png

{"Load": {"path": "tests/assets/sample2.jpg"}}
"Rotate180"
{"Save": {"path": "rotate_180.png"}}
%rotate_180.png => tests/assets/rotate_180-s2.png
