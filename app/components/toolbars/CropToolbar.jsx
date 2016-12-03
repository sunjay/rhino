const React = require('react');
const Icon = require('react-fontawesome').default;

const Navbar = require('../Navbar');
const NavbarButton = require('../NavbarButton');
const NavbarText = require('../NavbarText');

const CropToolbar = () => (
  <Navbar>
    <NavbarText>Crop</NavbarText>

    <NavbarButton>
      <Icon name='check' />
    </NavbarButton>
    <NavbarButton>
      <Icon name='times' />
    </NavbarButton>
  </Navbar>
);

CropToolbar.propTypes = {
};

module.exports = CropToolbar;
