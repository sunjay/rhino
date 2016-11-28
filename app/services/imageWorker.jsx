const spawn = require('child_process').spawn;

const {
  updateImage,
  ACTION_OPEN_IMAGE,
} = require('../actions/ImageActions');

class ImageWorker {
  constructor() {
    this.worker = null;
    this.queue = [''];
  }

  start({dispatch}) {
    this.worker = spawn('cargo', ['run', '--quiet'], {
      cwd: './image-worker',
    });

    this.worker.stdout.on('data', (data) => {
      // The data that comes in is not guarenteed to be a complete command line
      // To account for this, we maintain a queue of commands since we
      // may get several complete commands or no complete commands in this data
      // The final element in the queue always contains the latest incomplete
      // response
      // When a response is completed with the \n, this split call will result
      // in an empty string at the end because 'abc\n'.split('\n') == ['abc', '']
      // That empty string at the end will become the next latest incomplete
      // response
      // Even if we get something like 'abc\nfoo', foo is incomplete because
      // it has not been terminated with a newline. Thus, it will remain at the
      // end of the queue and keep being appended to until it is complete
      const lines = data.toString().split('\n');
      this.queue[this.queue.length - 1] += lines[0];
      this.queue.push(...lines.slice(1));

      for (const line of this.queue.slice(0, -1)) {
        this.processResponse(dispatch, line);
      }
    });

    this.worker.stderr.on('data', (data) => {
      console.error(`image worker stderr: ${data}`);
    });

    this.worker.on('close', (code) => {
      console.info(`child process exited with code ${code}`);
    });

    this.worker.on('disconnect', () => {
      console.warn('child process was disconnected');
    });

    this.worker.on('error', (error) => {
      console.error(`image worker error: ${error}`);
    });
  }

  processResponse(dispatch, data) {
    const response = JSON.parse(data);

    if (response.Success) {
      const {path, width, height, data} = response.Success;
      dispatch(updateImage(path, width, height, data));
    }
    else {
      console.error('image worker response', response);
      //TODO: Implement something better here in #36
      alert('Something went wrong. Check console for more information.');
    }
  }

  middleware() {
    return (/*store*/) => (next) => (action) => {
      if (action.type === ACTION_OPEN_IMAGE) {
        this.open(action.path);
      }

      next(action);
    };
  }

  open(path) {
    this.send({
      Load: {path},
    });
  }

  send(message) {
    this.worker.stdin.write(JSON.stringify(message) + '\n');
  }
}

module.exports = ImageWorker;
