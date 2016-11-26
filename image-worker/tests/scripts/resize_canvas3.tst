# NOTE: Broke this into multiple test scripts because it
# was taking too long

# Resize multiple times onto smaller canvas at all anchor points (only a single load)

{"Load": {"path": "tests/assets/sample.jpg"}}

{"ResizeCanvas": {"width": 401, "height": 327, "anchor": "N"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-401x327-N.png

{"ResizeCanvas": {"width": 392, "height": 316, "anchor": "NE"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-392x316-NE.png

{"ResizeCanvas": {"width": 383, "height": 305, "anchor": "E"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-383x305-E.png

{"ResizeCanvas": {"width": 374, "height": 294, "anchor": "SE"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-374x294-SE.png

{"ResizeCanvas": {"width": 365, "height": 283, "anchor": "S"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-365x283-S.png

{"ResizeCanvas": {"width": 356, "height": 272, "anchor": "SW"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-356x272-SW.png

{"ResizeCanvas": {"width": 347, "height": 261, "anchor": "W"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-347x261-W.png

{"ResizeCanvas": {"width": 338, "height": 250, "anchor": "NW"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-338x250-NW.png

{"ResizeCanvas": {"width": 329, "height": 239, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-329x239-Middle.png

# Resize onto smaller canvas at all anchor points

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 227, "height": 177, "anchor": "N"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-227x177-N.png

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 227, "height": 177, "anchor": "NE"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-227x177-NE.png

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 227, "height": 177, "anchor": "E"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-227x177-E.png

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 227, "height": 177, "anchor": "SE"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-227x177-SE.png

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 227, "height": 177, "anchor": "S"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-227x177-S.png

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 227, "height": 177, "anchor": "SW"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-227x177-SW.png

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 227, "height": 177, "anchor": "W"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-227x177-W.png

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 227, "height": 177, "anchor": "NW"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-227x177-NW.png

{"Load": {"path": "tests/assets/sample.jpg"}}
{"ResizeCanvas": {"width": 227, "height": 177, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas3.png"}}
%resize_canvas3.png => tests/assets/resize_canvas-227x177-Middle.png
