const spawn = require('child_process').spawn;

const {
  updateImage,
  ACTION_OPEN_IMAGE,
} = require('../actions/ImageActions');

class ImageWorker {
  constructor() {
    this.worker = null;
  }

  start({dispatch}) {
    this.worker = spawn('cargo', ['run', '--quiet'], {
      cwd: './image-worker',
    });

    this.worker.stdout.on('data', (data) => {
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
