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
