const React = require('react');

const Canvas = require('../../containers/Canvas');
const MenuBar = require('../../containers/MenuBar');
const ToolbarRouter = require('../../containers/ToolbarRouter');

const Page = require('../Page');
const MainContent = require('../MainContent');

const Editor = () => (
  <Page>
    <MenuBar />
    <ToolbarRouter />
    <MainContent>
      <Canvas />
    </MainContent>
  </Page>
);

module.exports = Editor;
