# Loading an empty image should not work
{"Load": {"path": "tests/assets/empty.jpg"}}
>{"ActionFailed":{"reason":"Format error: zero width in frame header"}}

# Disallow loading empty filename
{"Load": {"path": ""}}
>{"ActionFailed":{"reason":"Cannot load empty path"}}

# Disallow saving empty filename
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Save": {"path": ""}}
>{"ActionFailed":{"reason":"Cannot save empty path"}}

# Disallow loading directories (and paths without extensions)
{"Load": {"path": "tests"}}
>{"ActionFailed":{"reason":"The Decoder does not support the image format `Image format image/\"\" is not supported.`"}}

# Disallow saving paths that are directories (and paths without extensions)
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Save": {"path": "tests"}}
>{"ActionFailed":{"reason":"Unsupported extension: "}}

# Disallow loading paths that do not exist
{"Load": {"path": "___please-do-not-exist.jpg"}}
>{"ActionFailed":{"reason":"No such file or directory (os error 2)"}}

# Make sure saving fails when the project is closed
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Save": {"path": "output.jpg"}}
-output.jpg
"Close"
>"ProjectClosed"
{"Save": {"path": "output.jpg"}}
>"NoProjectCreated"
