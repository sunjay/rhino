# image-worker

This is a [Rust][rust] project responsible
for executing all of the actual image operations that the
editor performs.

We created this so that we could do image transformations in
a low-level, type safe, memory safe, non-garbage collected
language. An added benefit of having a separate image
processing process is that no image commands will ever block
the UI. All the image processing can be done in a language
that does not have the overhead of Node.js.

The UI only needs to send the right commands and then
display whatever this process provides as a response. The
UI knows little about how the commands are run. Its purpose
is to provide a convenient interface for sending input to this
image worker process.

## Usage

Make sure you have [Rust][rust] nightly installed.

To run the image worker, you can use the standard cargo commands:

```
cargo run
```

The image worker takes JSON as input and produces JSON as
output. The actions you can perform are all in `src/action.rs`.
Take a look at the tests in that file for examples of the JSON
you can send.

We use test scripts to test interactions with the image
worker process. Those are documented below as well.

To run tests, use:

```
cargo test
```

The tests are parallelized as much as possible, and there are
a lot of them. On a multicore machine, the tests may take
up to a minute and a half or even two minutes.

## Test Scripts

All the test scripts are located in the `tests/scripts` directory.
The test script runner program is located at `tests/scripts.rs`.
Learning to write test scripts should only take about 5 minutes
and makes testing these commands extremely simple and expressive.
We can actually ensure that the process responds as we want it to
with whatever inputs we want.

When writing test scripts, you are essentially just directly
writing the input JSON you want the worker process to see. Then
you use a couple of convenience commands to expect certain
outputs.

Example of a test script:

```
# Crop from origin
{"Load": {"path": "tests/assets/sample.jpg"}}
{"Crop": {"x": 0, "y": 0, "width": 200, "height": 400}}
{"Save": {"path": "crop.jpg"}}
# Test that these two files are the same
%crop.jpg => tests/assets/crop-200x400+0+0.jpg
# Close the current project
"Close"
# Ensure the output is as we expect for this command
>"ProjectClosed"
```

Most of these lines are just the input JSON that will be
provided to the worker process. The lines that are not JSON
are special commands (or comments) that perform different
operations.

Each test script is run in its own thread with its own isolated
image worker process.

The test script runner will automatically assert that
each input you provided resulted in a Success message unless
you specify the output explicitly.

Each command in a test script will be executed from top to
bottom. Before the test script begins, an image worker process
will be spawned and used for the entire duration of the test
script.

### Syntax

Most lines in a test script are input lines. These are regular
JSON objects that will be fed with no additional processing
to the worker process.

Examples:

```
{"Load": {"path": "tests/assets/empty.jpg"}}
"Close"
```

Any line starting with `#` will be ignored. You can use this
to provide documentation comments about the tests you are
creating. You can also use this to disable tests. Try not to
leave any tests disabled if you only meant to do that temporarily.

Examples:

```
# This test is so cool!
# Too bad it is commented out...
#{"Load": {"path": "tests/assets/sample.jpg"}}
#{"Crop": {"x": 300, "y": 200, "width": 200, "height": 100}}
#{"Save": {"path": "crop.jpg"}}
```

To assert that two image files are the same, use the `%`
command. This command asserts that the first argument is
exactly the same as the second argument.

```
%output.jpg => tests/assets/crop-640x480+900+800.jpg
```

The first argument will automatically be deleted immediately
after the equality test. This is so that no orphaned files
are left behind after tests have run.

If the equality check fails, the fire argument will not
be deleted. This way you can debug the failure and figure
out what went wrong.

Note: Since all the test scripts are killed as soon as one
of them fails, you may find that additional test output
files are leftover when the test runner stops.

**To avoid conflicts with other test script threads, always
name your output file after the test script filename. Use
that filename in every Save command.**

To just remove a file and perform no checks:

```
-output.jpg
```

`output.jpg` is the file that will be removed.

This command is useful when you have produced a file that
you want to clean up but you do not need to check it in any
way.

Since files are deleted immediately after checking them,
you do not get an opportunity to inspect them after the
tests have ran. For debugging, it can be useful to copy
those files before they get deleted. You can do so with
the copy command as follows:

```
=output.jpg destination.jpg
```

The first argument is the file that will be copied. The
second argument is the destination file. Make sure those
files have the same extension or you will not be able to
open them.

To assert that the last input that was sent produced a
certain output, prefix the expected output with `>` as
shown below:

```
>{"ActionFailed":{"reason":"Cannot save image with dimension equal to zero"}}
```

This is most often used to assert that a certain error
occurred when you expected it to occur. The test runner
will complain if it sees any output that you did not
explicitly specify. Success messages can be checked
automatically, but everything else needs to be written
out using this command.

When you explicitly provide the output like this, the
test script runner will not automatically do any other
checks on the output. It will only assert that the output
matches the output you provided.

### Tips for writing and running tests

* Keep all paths relative to the `image-worker/` directory
  since that is where you run `cargo test`.
* If you have a test script that is particularly slow, you can
  break it up into multiple files to speed it up. Each script
  will be executed in its own thread with its own isolated
  image worker process. Make sure the filenames you use to
  save are unique or else you will have conflicts.
* When running test scripts, if you get any output along the
  lines of "the actual output was: " and then nothing, it means
  the image worker panicked instead of returning an error message.
  You should run the image worker with `cargo run` and paste any
  input just before the panic occurred. The error message from the
  tests should provide enough information for you to do that.
* The message produced after "Close" is not a Success message
  because the successful result of close is not a new version
  of the project. In a test script, we make you assert the output
  of a "Close" command explicitly so you understand this. The
  test script runner will catch if you assume that this should
  be a Success message like any other command.

[rust]: https://www.rust-lang.org/
