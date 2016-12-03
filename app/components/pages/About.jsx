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
    {/**
      * TODO: (Technical Debt) It's possible that this usage
      * of MainContent is completely unnecessary here.
      * MainContent is meant to be used to create horizontal
      * layouts. We have a HorizontalLayout component that was
      * made after MainContent.
      * We probably want to address several things with these
      * layout components:
      * 1. Remove MainContent from pages where we just want a
      *    vertical layout anyway (like all the modals)
      * 2. Replace MainContent with HorizontalLayout if that makes
      *    sense when this refactoring is done
      */}
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
