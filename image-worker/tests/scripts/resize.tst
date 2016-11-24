# Disallow before loading anything
{"Resize": {"width": 9000, "height": 9000}}
>"NoProjectCreated"

# Scale down
{"Load": {"path": "tests/assets/sample.jpg"}}
{"Resize": {"width": 400, "height": 200}}
{"Save": {"path": "resize.jpg"}}
%resize.jpg => tests/assets/resize-400x200.jpg
# Scale down again
{"Resize": {"width": 200, "height": 100}}
{"Save": {"path": "resize.jpg"}}
%resize.jpg => tests/assets/resize-200x100.jpg

# Scale up
{"Load": {"path": "tests/assets/sample.jpg"}}
{"Resize": {"width": 800, "height": 1200}}
{"Save": {"path": "resize.jpg"}}
%resize.jpg => tests/assets/resize-800x1200.jpg
# Scale up again
{"Resize": {"width": 1000, "height": 1300}}
{"Save": {"path": "resize.jpg"}}
%resize.jpg => tests/assets/resize-1000x1300.jpg

# Scale down a lot
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 20, "height": 10}}
{"Save": {"path": "resize.jpg"}}
%resize.jpg => tests/assets/resize-20x10.jpg

# Scale up a lot (very time intensive test)
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 2000, "height": 4000}}
{"Save": {"path": "resize.jpg"}}
%resize.jpg => tests/assets/resize-2000x4000.jpg

# Leave one dimension the same
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 400, "height": 100}}
{"Save": {"path": "resize.jpg"}}
%resize.jpg => tests/assets/resize-400x100.jpg

# Leave other dimension the same
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 100, "height": 300}}
{"Save": {"path": "resize.jpg"}}
%resize.jpg => tests/assets/resize-100x300.jpg

# Usually this would cause a panic because the image library does not
# know what to do when trying to save an empty png
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 0, "height": 0}}
{"Save": {"path": "resize.png"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

# Disallow saving jpg images with zero dimensions
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Resize": {"width": 0, "height": 0}}
{"Save": {"path": "resize.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}
