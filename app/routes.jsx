const Editor = require('./components/pages/Editor');

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
});

module.exports = routes;
