# Disallow before loading anything
{"ResizeCanvas": {"width": 480, "height": 700, "anchor": "NE"}}
>"NoProjectCreated"

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

# Resize multiple times onto smaller canvas at all anchor points (only a single load)

{"Load": {"path": "tests/assets/sample.jpg"}}

{"ResizeCanvas": {"width": 401, "height": 327, "anchor": "N"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-401x327-N.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-401x327-N.jpg

{"ResizeCanvas": {"width": 392, "height": 316, "anchor": "NE"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-392x316-NE.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-392x316-NE.jpg

{"ResizeCanvas": {"width": 383, "height": 305, "anchor": "E"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-383x305-E.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-383x305-E.jpg

{"ResizeCanvas": {"width": 374, "height": 294, "anchor": "SE"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-374x294-SE.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-374x294-SE.jpg

{"ResizeCanvas": {"width": 365, "height": 283, "anchor": "S"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-365x283-S.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-365x283-S.jpg

{"ResizeCanvas": {"width": 356, "height": 272, "anchor": "SW"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-356x272-SW.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-356x272-SW.jpg

{"ResizeCanvas": {"width": 347, "height": 261, "anchor": "W"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-347x261-W.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-347x261-W.jpg

{"ResizeCanvas": {"width": 338, "height": 250, "anchor": "NW"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-338x250-NW.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-338x250-NW.jpg

{"ResizeCanvas": {"width": 329, "height": 239, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-329x239-Middle.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-329x239-Middle.jpg

# Resize onto smaller canvas at all anchor points

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 566, "height": 380, "anchor": "N"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-566x380-N.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-566x380-N.jpg

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 566, "height": 380, "anchor": "NE"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-566x380-NE.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-566x380-NE.jpg

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 566, "height": 380, "anchor": "E"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-566x380-E.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-566x380-E.jpg

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 566, "height": 380, "anchor": "SE"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-566x380-SE.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-566x380-SE.jpg

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 566, "height": 380, "anchor": "S"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-566x380-S.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-566x380-S.jpg

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 566, "height": 380, "anchor": "SW"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-566x380-SW.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-566x380-SW.jpg

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 566, "height": 380, "anchor": "W"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-566x380-W.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-566x380-W.jpg

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 566, "height": 380, "anchor": "NW"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-566x380-NW.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-566x380-NW.jpg

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 566, "height": 380, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas.jpg"}}
=resize_canvas.jpg tests/assets/resize_canvas-566x380-Middle.jpg
%resize_canvas.jpg => tests/assets/resize_canvas-566x380-Middle.jpg

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
