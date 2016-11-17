const spawn = require('child_process').spawn;

class ImageWorker {
  constructor() {
    this.store = null;
    this.worker = null;
  }

  start(store) {
    this.store = store;

    this.worker = spawn('cargo', ['run', '--quiet'], {
      cwd: './image-worker',
    });

    this.worker.stdout.on('data', (data) => {
      console.info(`stdout: ${data}`);
    });

    this.worker.stderr.on('data', (data) => {
      console.info(`stderr: ${data}`);
    });

    this.worker.on('close', (code) => {
      console.info(`child process exited with code ${code}`);
    });

    this.worker.stdin.write('foo\n');
  }

  middleware() {
    return store => next => action => next(action);
  }
}

module.exports = ImageWorker;
