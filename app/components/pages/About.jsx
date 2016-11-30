const React = require('react');

const MenuBar = require('../../containers/MenuBar');
const ExternalLink = require('../../containers/ExternalLink');

const Page = require('../Page');
const MainContent = require('../MainContent');
const Logo = require('../Logo');

const {
  about,
} = require('../../../scss/pages/about.scss');

const About = () => (
  <Page>
    <MenuBar modal={true} />
    <MainContent>
      <div className={about}>
        <Logo size='large' align='center' block />
        <h1>RHINO EDITOR</h1>

        <p>Version {process.env.APP_VERSION}</p>
        <p>Website: <ExternalLink href='http://rhinoeditor.com'>rhinoeditor.com</ExternalLink></p>
      </div>
    </MainContent>
  </Page>
);

module.exports = About;
