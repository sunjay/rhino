const React = require('react');

const MenuBar = require('../../containers/MenuBar');

const Page = require('../Page');
const MainContent = require('../MainContent');
const Logo = require('../Logo');

const {
  notFound,
} = require('../../../scss/pages/notFound.scss');

const NotFound = () => (
  <Page>
    <MenuBar modal={true} />
    <MainContent>
      <div className={notFound}>
        <Logo size='large' align='center' block />
        <h1>RHINO EDITOR</h1>

        <h2>Error Loading Screen</h2>
        <p>This screen could not be loaded.
          This is likely an error on our end. Sorry about that!
          Please close this window and try again.</p>
      </div>
    </MainContent>
  </Page>
);

module.exports = NotFound;
