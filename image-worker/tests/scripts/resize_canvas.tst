# Disallow before loading anything
{"ResizeCanvas": {"width": 480, "height": 700, "anchor": "NE"}}
>"NoProjectCreated"

# Resize onto larger canvas
{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 700, "height": 500, "anchor": "NE"}}
{"Save": {"path": "resize_canvas.jpg"}}
%resize_canvas.jpg => tests/assets/resize_canvas-700x500-NE.jpg

#TODO: All anchor points

# Resize onto smaller canvas

#TODO: All anchor points

# Resize onto canvas with smaller width and larger height

#TODO: All anchor points

# Resize onto canvas with larger width and smaller height

#TODO: All anchor points

#TODO: Odd numbered dimensions
