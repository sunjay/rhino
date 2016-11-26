# NOTE: Broke this into multiple test scripts because it
# was taking too long

# Resize onto canvas with same width and same height

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 100, "anchor": "N"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x100-N.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 100, "anchor": "NE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x100-NE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 100, "anchor": "E"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x100-E.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 100, "anchor": "SE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x100-SE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 100, "anchor": "S"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x100-S.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 100, "anchor": "SW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x100-SW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 100, "anchor": "W"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x100-W.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 100, "anchor": "NW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x100-NW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 100, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x100-Middle.png

# Resize onto canvas with same width and larger height

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 130, "anchor": "N"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x130-N.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 130, "anchor": "NE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x130-NE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 130, "anchor": "E"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x130-E.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 130, "anchor": "SE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x130-SE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 130, "anchor": "S"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x130-S.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 130, "anchor": "SW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x130-SW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 130, "anchor": "W"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x130-W.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 130, "anchor": "NW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x130-NW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 130, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x130-Middle.png

# Resize onto canvas with same width and smaller height

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 60, "anchor": "N"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x60-N.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 60, "anchor": "NE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x60-NE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 60, "anchor": "E"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x60-E.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 60, "anchor": "SE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x60-SE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 60, "anchor": "S"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x60-S.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 60, "anchor": "SW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x60-SW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 60, "anchor": "W"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x60-W.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 60, "anchor": "NW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x60-NW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 120, "height": 60, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-120x60-Middle.png

# Resize onto canvas with same height and larger width

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 100, "anchor": "N"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-150x100-N.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 100, "anchor": "NE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-150x100-NE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 100, "anchor": "E"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-150x100-E.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 100, "anchor": "SE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-150x100-SE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 100, "anchor": "S"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-150x100-S.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 100, "anchor": "SW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-150x100-SW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 100, "anchor": "W"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-150x100-W.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 100, "anchor": "NW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-150x100-NW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 150, "height": 100, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-150x100-Middle.png

{"Load": {"path": "tests/assets/sample3.png"}}

# Resize onto canvas with same height and smaller width

{"ResizeCanvas": {"width": 80, "height": 100, "anchor": "N"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-80x100-N.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 80, "height": 100, "anchor": "NE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-80x100-NE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 80, "height": 100, "anchor": "E"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-80x100-E.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 80, "height": 100, "anchor": "SE"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-80x100-SE.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 80, "height": 100, "anchor": "S"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-80x100-S.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 80, "height": 100, "anchor": "SW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-80x100-SW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 80, "height": 100, "anchor": "W"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-80x100-W.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 80, "height": 100, "anchor": "NW"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-80x100-NW.png

{"Load": {"path": "tests/assets/sample3.png"}}
{"ResizeCanvas": {"width": 80, "height": 100, "anchor": "Middle"}}
{"Save": {"path": "resize_canvas2.png"}}
%resize_canvas2.png => tests/assets/resize_canvas-80x100-Middle.png
