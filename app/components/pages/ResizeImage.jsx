const React = require('react');

const MenuBar = require('../../containers/MenuBar');
const ResizeImageForm = require('../../containers/ResizeImageForm');

const Page = require('../Page');
const MainContent = require('../MainContent');

const ResizeImage = ({location: {query}}) => (
  <Page>
    <MenuBar modal={true} title='Image Size' />
    <MainContent>
      <ResizeImageForm {...(query || {})} />
    </MainContent>
  </Page>
);

module.exports = ResizeImage;
