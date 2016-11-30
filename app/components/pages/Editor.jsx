const React = require('react');

const Canvas = require('../../containers/Canvas');
const MenuBar = require('../../containers/MenuBar');

const Page = require('../Page');
const MainContent = require('../MainContent');

const Editor = () => (
  <Page>
    <MenuBar />
    <MainContent>
      <Canvas />
    </MainContent>
  </Page>
);

module.exports = Editor;
