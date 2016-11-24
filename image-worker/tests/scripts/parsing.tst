# Testing the JSON parser with a bunch of different cases to ensure we respond
# to invalid input in a useful way

{
>{"ActionParseError":{"error":"EOF while parsing a value at line 1 column 1"}}

{}
>{"ActionParseError":{"error":"expected value at line 1 column 2"}}

{"Foo"}
>{"ActionParseError":{"error":"unknown variant \"Foo\" at line 1 column 6"}}

"
>{"ActionParseError":{"error":"EOF while parsing a string at line 1 column 1"}}

28
>{"ActionParseError":{"error":"expected value at line 1 column 1"}}

{"Resize": {}}
>{"ActionParseError":{"error":"missing field \"width\" at line 1 column 13"}}

}
>{"ActionParseError":{"error":"expected value at line 1 column 1"}}

{"Resize": {"width": "25"}}
>{"ActionParseError":{"error":"missing field \"height\" at line 1 column 26"}}

{"Resize": {"width": "foo"}}
>{"ActionParseError":{"error":"invalid type: str at line 1 column 26"}}

{"Resize": {"width": 255}}
>{"ActionParseError":{"error":"missing field \"height\" at line 1 column 25"}}

{"Resize": {"widh": 300, "height": 200}}
>{"ActionParseError":{"error":"missing field \"width\" at line 1 column 39"}}

"Foo"
>{"ActionParseError":{"error":"unknown variant \"Foo\" at line 1 column 5"}}

"Foo"
>{"ActionParseError":{"error":"unknown variant \"Foo\" at line 1 column 5"}}

{"Resize": {"width": 300, "height": 200,}}
>{"ActionParseError":{"error":"key must be a string at line 1 column 41"}}

{"Resize": {"width": 200, "height": 150}, "Load": {"path": "foo.jpg"}}
>{"ActionParseError":{"error":"expected value at line 1 column 41"}}
