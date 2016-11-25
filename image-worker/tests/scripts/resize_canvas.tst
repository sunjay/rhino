# Disallow before loading anything
{"ResizeCanvas": {"width": 480, "height": 700, "anchor": "NE"}}
>"NoProjectCreated"

# Resize multiple times onto larger canvas at all anchor points (only a single load)

{"Load": {"path": "tests/assets/sample3.jpg"}}

{"ResizeCanvas": {"width": 140, "height": 120, "anchor": "N"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-140x120-N.jpg

{"ResizeCanvas": {"width": 150, "height": 130, "anchor": "NE"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-150x130-NE.jpg

{"ResizeCanvas": {"width": 160, "height": 140, "anchor": "E"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-160x140-E.jpg

{"ResizeCanvas": {"width": 170, "height": 150, "anchor": "SE"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-170x150-SE.jpg

{"ResizeCanvas": {"width": 180, "height": 160, "anchor": "S"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-180x160-S.jpg

{"ResizeCanvas": {"width": 190, "height": 170, "anchor": "SW"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-190x170-SW.jpg

{"ResizeCanvas": {"width": 200, "height": 180, "anchor": "W"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-200x180-W.jpg

{"ResizeCanvas": {"width": 210, "height": 190, "anchor": "NW"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-210x190-NW.jpg

{"ResizeCanvas": {"width": 220, "height": 200, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-220x200-Middle.jpg

# Resize onto larger canvas at all anchor points

{"Load": {"path": "tests/assets/sample3.jpg"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "N"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-300x211-N.jpg

{"Load": {"path": "tests/assets/sample3.jpg"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "NE"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-300x211-NE.jpg

{"Load": {"path": "tests/assets/sample3.jpg"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "E"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-300x211-E.jpg

{"Load": {"path": "tests/assets/sample3.jpg"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "SE"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-300x211-SE.jpg

{"Load": {"path": "tests/assets/sample3.jpg"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "S"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-300x211-S.jpg

{"Load": {"path": "tests/assets/sample3.jpg"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "SW"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-300x211-SW.jpg

{"Load": {"path": "tests/assets/sample3.jpg"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "W"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-300x211-W.jpg

{"Load": {"path": "tests/assets/sample3.jpg"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "NW"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-300x211-NW.jpg

{"Load": {"path": "tests/assets/sample3.jpg"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-300x211-Middle.jpg

# Resize multiple times onto smaller canvas at all anchor points (only a single load)

#TODO: All anchor points

# Resize onto smaller canvas

#TODO: All anchor points

# Resize onto canvas with smaller width and larger height

#TODO: All anchor points

# Resize onto canvas with larger width and smaller height

#TODO: All anchor points

# Resize onto canvas with width the same and larger height

#TODO: All anchor points

# Resize onto canvas with width the same and smaller height

#TODO: All anchor points

# Resize onto canvas with height the same and larger width

#TODO: All anchor points

# Resize onto canvas with height the same and smaller width

#TODO: Odd numbered dimensions
