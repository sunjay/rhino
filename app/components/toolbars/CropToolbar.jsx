const React = require('react');
const Icon = require('react-fontawesome').default;

const Navbar = require('../Navbar');
const NavbarButton = require('../NavbarButton');
const NavbarText = require('../NavbarText');
const Form = require('../Form');
const FormGroup = require('../FormGroup');
const Label = require('../Label');
const Input = require('../Input');

const CropToolbar = ({
  x,
  y,
  width,
  height,
  onCancel = () => {},
}) => (
  <Navbar>
    <Form layout='horizontal'>
      <NavbarText>Crop</NavbarText>

      <FormGroup layout='horizontal'>
        <Label>x</Label>
        <Input type='number' min={0} value={x} />
      </FormGroup>

      <FormGroup layout='horizontal'>
        <Label>y</Label>
        <Input type='number' min={0} value={y} />
      </FormGroup>

      <FormGroup layout='horizontal'>
        <Label>width</Label>
        <Input type='number' min={1} value={width} />
      </FormGroup>

      <FormGroup layout='horizontal'>
        <Label>height</Label>
        <Input type='number' min={1} value={height} />
      </FormGroup>

      <NavbarButton title='Apply'>
        <Icon name='check' />
      </NavbarButton>

      <NavbarButton title='Cancel' onClick={onCancel}>
        <Icon name='ban' />
      </NavbarButton>

      {/* Without some kind of submit button, the form cannot be submitted with the enter key */}
      <Input type='submit' style={{position: 'absolute', left: -999999}} />
    </Form>
  </Navbar>
);

CropToolbar.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  onCancel: React.PropTypes.func,
};

module.exports = CropToolbar;
