const React = require('react');

const MenuBar = require('../../containers/MenuBar');
const ResizeCanvasForm = require('../../containers/ResizeCanvasForm');

const Page = require('../Page');
const MainContent = require('../MainContent');

const ResizeCanvas = ({location: {query}}) => (
  <Page>
    <MenuBar modal={true} title='Canvas Size' />
    <MainContent>
      <ResizeCanvasForm {...(query || {})} />
    </MainContent>
  </Page>
);

module.exports = ResizeCanvas;
