const Editor = require('./components/pages/Editor');
const About = require('./components/pages/About');

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
});

module.exports = routes;
