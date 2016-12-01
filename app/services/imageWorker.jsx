const spawn = require('child_process').spawn;

const {
  updateImage,
  destroyImage,
  ACTION_LOAD_IMAGE,
  ACTION_FLIP_IMAGE_HORIZONTAL,
  ACTION_FLIP_IMAGE_VERTICAL,
} = require('../actions/ImageActions');

const {
  saveFileAs,
  ACTION_SAVE_FILE,
  ACTION_CLOSE_FILE,
} = require('../actions/FileActions');

const actionHandlers = {
  [ACTION_LOAD_IMAGE]({path}) {
    this.send({
      Load: {path},
    });
  },

  [ACTION_CLOSE_FILE]() {
    this.send('Close');
  },

  [ACTION_SAVE_FILE](action, {dispatch, getState}) {
    const image = getState().page.image;
    if (!image) {
      return;
    }

    const path = image.path;
    if (!path) {
      dispatch(saveFileAs());
    }
    else {
      this.send({
        Save: {path},
      });
    }
  },

  [ACTION_FLIP_IMAGE_HORIZONTAL](action, {getState}) {
    const image = getState().page.image;
    if (!image) {
      return;
    }

    this.send('FlipHorizontal');
  },

  [ACTION_FLIP_IMAGE_VERTICAL](action, {getState}) {
    const image = getState().page.image;
    if (!image) {
      return;
    }

    this.send('FlipVertical');
  },
};

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
      this.queue = this.queue.slice(this.queue.length - 1);
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

    if (response === 'ProjectClosed') {
      dispatch(destroyImage());
    }
    else if (response.Success) {
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
    return (store) => (next) => (action) => {
      const handler = actionHandlers[action.type];
      if (handler) {
        handler.call(this, action, store);
      }

      next(action);
    };
  }

  send(message) {
    console.info('Sending to image worker', message);
    this.worker.stdin.write(JSON.stringify(message) + '\n');
  }
}

module.exports = ImageWorker;
