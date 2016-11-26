# Disallow before loading anything
"Rotate270"
>"NoProjectCreated"

# Multiple rotations
{"Load": {"path": "tests/assets/sample3.png"}}
"Rotate270"
{"Save": {"path": "rotate_270.png"}}
%rotate_270.png => tests/assets/rotate_270-s3.png
"Rotate270"
{"Save": {"path": "rotate_270.png"}}
%rotate_270.png => tests/assets/rotate_270-s3-2.png
"Rotate270"
{"Save": {"path": "rotate_270.png"}}
%rotate_270.png => tests/assets/rotate_270-s3-3.png
"Rotate270"
{"Save": {"path": "rotate_270.png"}}
%rotate_270.png => tests/assets/rotate_270-s3-4.png

# Single rotation

{"Load": {"path": "tests/assets/sample.jpg"}}
"Rotate270"
{"Save": {"path": "rotate_270.png"}}
%rotate_270.png => tests/assets/rotate_270-s.png

{"Load": {"path": "tests/assets/sample2.jpg"}}
"Rotate270"
{"Save": {"path": "rotate_270.png"}}
%rotate_270.png => tests/assets/rotate_270-s2.png
