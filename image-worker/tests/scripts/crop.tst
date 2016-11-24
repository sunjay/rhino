# Disallow before loading anything
{"Crop": {"x": 900, "y": 800, "width": 640, "height": 480}}
>"NoProjectCreated"

# Test basic crop operation
{"Load": {"path": "tests/assets/sample.jpg"}}
{"Crop": {"x": 900, "y": 800, "width": 640, "height": 480}}
{"Save": {"path": "output.jpg"}}
%output.jpg => tests/assets/crop-640x480+900+800.jpg
# Test further cropping the image
{"Crop": {"x": 50, "y": 100, "width": 300, "height": 500}}
{"Save": {"path": "output.jpg"}}
%output.jpg => tests/assets/crop-300x500+50+100.jpg

# Crop simple image
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 60, "width": 125, "height": 200}}
{"Save": {"path": "output.jpg"}}
%output.jpg => tests/assets/crop-125x200+25+60.jpg

# Usually this would cause a panic because the image library does not
# know what to do when trying to save an empty png
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 1000000, "y": 1000000, "width": 125, "height": 200}}
{"Save": {"path": "output.png"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

# Disallow saving images with zero dimensions

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 50000, "y": 60, "width": 125, "height": 200}}
{"Save": {"path": "output.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 50000, "width": 125, "height": 200}}
{"Save": {"path": "output.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 60, "width": 0, "height": 200}}
{"Save": {"path": "output.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 60, "width": 125, "height": 0}}
{"Save": {"path": "output.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 25, "y": 60, "width": 0, "height": 0}}
{"Save": {"path": "output.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}

{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Crop": {"x": 1000000, "y": 1000000, "width": 125, "height": 200}}
{"Save": {"path": "output.jpg"}}
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}
