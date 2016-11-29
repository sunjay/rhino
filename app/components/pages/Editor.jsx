const React = require('react');

const Canvas = require('../../containers/Canvas');
const MenuBar = require('../../containers/MenuBar');

const MainContent = require('../MainContent');

const {editor} = require('../../../scss/components/editor.scss');

const Editor = () => (
  <div className={editor}>
    <MenuBar />
    <MainContent>
      <Canvas />
    </MainContent>
  </div>
);

module.exports = Editor;
