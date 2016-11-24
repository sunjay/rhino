# Disallow before loading anything
{"Crop": {"x": 900, "y": 800, "width": 480, "height": 700}}
>"NoProjectCreated"

# Crop from origin
{"Load": {"path": "tests/assets/sample.jpg"}}
{"Crop": {"x": 0, "y": 0, "width": 200, "height": 400}}
{"Save": {"path": "crop.jpg"}}
%crop.jpg => tests/assets/crop-200x400+0+0.jpg

# Test basic crop operation
{"Load": {"path": "tests/assets/sample.jpg"}}
{"Crop": {"x": 300, "y": 200, "width": 200, "height": 100}}
{"Save": {"path": "crop.jpg"}}
%crop.jpg => tests/assets/crop-200x100+300+200.jpg
# Test further cropping the image
{"Crop": {"x": 50, "y": 25, "width": 100, "height": 50}}
{"Save": {"path": "crop.jpg"}}
%crop.jpg => tests/assets/crop-100x50+50+25.jpg

# Crop simple image
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 60, "width": 125, "height": 200}}
{"Save": {"path": "crop.jpg"}}
%crop.jpg => tests/assets/crop-125x200+25+60.jpg

# Usually this would cause a panic because the image library does not
# know what to do when trying to save an empty png
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 1000000, "y": 1000000, "width": 125, "height": 200}}
{"Save": {"path": "crop.png"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

# Disallow saving images with zero dimensions

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 50000, "y": 60, "width": 125, "height": 200}}
{"Save": {"path": "crop.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 50000, "width": 125, "height": 200}}
{"Save": {"path": "crop.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 60, "width": 0, "height": 200}}
{"Save": {"path": "crop.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 60, "width": 125, "height": 0}}
{"Save": {"path": "crop.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 60, "width": 0, "height": 0}}
{"Save": {"path": "crop.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 1000000, "y": 1000000, "width": 125, "height": 200}}
{"Save": {"path": "crop.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}
