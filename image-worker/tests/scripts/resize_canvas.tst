# Disallow before loading anything
{"ResizeCanvas": {"width": 480, "height": 700, "anchor": "NE"}}
>"NoProjectCreated"

# Resizing canvas to the exact same size

#TODO: All anchor points

# Resize multiple times onto larger canvas at all anchor points (only a single load)

{"Load": {"path": "tests/assets/sample3.png"}}

{"ResizeCanvas": {"width": 140, "height": 120, "anchor": "N"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-140x120-N.png

{"ResizeCanvas": {"width": 150, "height": 130, "anchor": "NE"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x130-NE.png

{"ResizeCanvas": {"width": 160, "height": 140, "anchor": "E"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-160x140-E.png

{"ResizeCanvas": {"width": 170, "height": 150, "anchor": "SE"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-170x150-SE.png

{"ResizeCanvas": {"width": 180, "height": 160, "anchor": "S"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-180x160-S.png

{"ResizeCanvas": {"width": 190, "height": 170, "anchor": "SW"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-190x170-SW.png

{"ResizeCanvas": {"width": 200, "height": 180, "anchor": "W"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-200x180-W.png

{"ResizeCanvas": {"width": 210, "height": 190, "anchor": "NW"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-210x190-NW.png

{"ResizeCanvas": {"width": 220, "height": 200, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-220x200-Middle.png

# Test Undo/Redo of last action
"Undo"
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-210x190-NW.png
"Redo"
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-220x200-Middle.png

# Resize onto larger canvas at all anchor points

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "N"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-300x211-N.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "NE"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-300x211-NE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "E"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-300x211-E.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "SE"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-300x211-SE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "S"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-300x211-S.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "SW"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-300x211-SW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "W"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-300x211-W.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "NW"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-300x211-NW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 300, "height": 211, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-300x211-Middle.png

# Resize onto canvas with smaller width and larger height

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 100, "height": 200, "anchor": "N"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-100x200-N.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 100, "height": 200, "anchor": "NE"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-100x200-NE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 100, "height": 200, "anchor": "E"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-100x200-E.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 100, "height": 200, "anchor": "SE"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-100x200-SE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 100, "height": 200, "anchor": "S"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-100x200-S.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 100, "height": 200, "anchor": "SW"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-100x200-SW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 100, "height": 200, "anchor": "W"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-100x200-W.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 100, "height": 200, "anchor": "NW"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-100x200-NW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 100, "height": 200, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-100x200-Middle.png

# Resize onto canvas with larger width and smaller height

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 50, "anchor": "N"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x50-N.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 50, "anchor": "NE"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x50-NE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 50, "anchor": "E"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x50-E.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 50, "anchor": "SE"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x50-SE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 50, "anchor": "S"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x50-S.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 50, "anchor": "SW"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x50-SW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 50, "anchor": "W"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x50-W.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 50, "anchor": "NW"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x50-NW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 50, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas.png"}}
%resize_canvas.png => tests/assets/resize_canvas-150x50-Middle.png
