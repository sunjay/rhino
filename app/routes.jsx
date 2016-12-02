const Editor = require('./components/pages/Editor');
const About = require('./components/pages/About');
const ResizeImage = require('./components/pages/ResizeImage');
const ResizeCanvas = require('./components/pages/ResizeCanvas');

const routes = Object.freeze({
  editor: Object.freeze({
    title: 'Editor',
    path: 'editor',
    href: '#/editor',
    pattern: /^\/editor\/?.*/,
    component: Editor,
    onEnter: Editor.onPageEnter,
    onLeave: Editor.onPageLeave,
  }),
  about: Object.freeze({
    title: 'About',
    path: 'about',
    href: '#/about',
    pattern: /^\/about\/?.*/,
    component: About,
    onEnter: About.onPageEnter,
    onLeave: About.onPageLeave,
  }),
  resize: Object.freeze({
    title: 'Resize',
    path: 'resize',
    href: '#/resize',
    pattern: /^\/resize\/?.*/,
    component: ResizeImage,
    onEnter: ResizeImage.onPageEnter,
    onLeave: ResizeImage.onPageLeave,
  }),
  canvasSize: Object.freeze({
    title: 'Canvas Size',
    path: 'canvas-size',
    href: '#/canvas-size',
    pattern: /^\/canvas-size\/?.*/,
    component: ResizeCanvas,
    onEnter: ResizeCanvas.onPageEnter,
    onLeave: ResizeCanvas.onPageLeave,
  }),
});

module.exports = routes;
