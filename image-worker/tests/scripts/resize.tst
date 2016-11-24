# Disallow before loading anything
{"Resize": {"width": 640, "height": 480}}
>"NoProjectCreated"

# Test basic resize operation
{"Load": {"path": "tests/assets/sample.jpg"}}
{"Resize": {"width": 640, "height": 480}}
{"Save": {"path": "output.jpg"}}
%output.jpg => tests/assets/resize-640x480.jpg
# Test further resizing the image
{"Resize": {"width": 200, "height": 250}}
{"Save": {"path": "output.jpg"}}
%output.jpg => tests/assets/resize-200x250.jpg

# Resize simple image
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 125, "height": 200}}
{"Save": {"path": "output.jpg"}}
%output.jpg => tests/assets/resize-125x200.jpg

# Upscale simple image
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 600, "height": 400}}
{"Save": {"path": "output.jpg"}}
%output.jpg => tests/assets/resize-600x400.jpg

# Usually this would cause a panic because the image library does not
# know what to do when trying to save an empty png
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 0, "height": 0}}
{"Save": {"path": "output.png"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

# Disallow saving jpg images with zero dimensions
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 0, "height": 0}}
{"Save": {"path": "output.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}
