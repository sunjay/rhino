const React = require('react');

const Form = require('./Form');
const FormGroup = require('./FormGroup');
const Label = require('./Label');
const Input = require('./Input');
const FormStatic = require('./FormStatic');
const Fieldset = require('./Fieldset');
const Navbar = require('./Navbar');
const NavbarButton = require('./NavbarButton');
const NavbarRight = require('./NavbarRight');

const ResizeImageForm = React.createClass({
  propTypes: {
    initialWidth: React.PropTypes.number.isRequired,
    initialHeight: React.PropTypes.number.isRequired,
    onCancel: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      onCancel() {},
    };
  },

  getInitialState() {
    return {
      width: this.props.initialWidth,
      height: this.props.initialHeight,
      ratio: true,
    };
  },

  onChangeDimension(dim, event) {
    this.setState({
      [dim]: event.target.value,
    });
  },

  onChangeMaintainRatio(event) {
    this.setState({
      ratio: event.target.checked,
    });
  },

  render() {
    const {onCancel} = this.props;
    const {width, height, ratio} = this.state;

    return (
      <Form>
        <Fieldset>
          <legend>Pixel Dimensions:</legend>
          <FormGroup layout='horizontal'>
            <Label>Width:&nbsp;</Label>
            <Input type='number' min={1} value={width}
              onChange={(e) => this.onChangeDimension('width', e)} />
            <FormStatic>pixels</FormStatic>
          </FormGroup>
          <FormGroup layout='horizontal'>
            <Label>Height:</Label>
            <Input type='number' min={1} value={height}
              onChange={(e) => this.onChangeDimension('height', e)} />
            <FormStatic>pixels</FormStatic>
          </FormGroup>
          <FormGroup layout='horizontal'>
            <Label controlId='maintainAspectRatio'>
              <Input id='maintainAspectRatio'
                type='checkbox' checked={ratio}
                onChange={this.onChangeMaintainRatio} />

              Maintain aspect ratio
            </Label>
          </FormGroup>
        </Fieldset>

        <Navbar>
          <NavbarButton onClick={onCancel}>Cancel</NavbarButton>
          <NavbarRight>
            <NavbarButton style='primary'>Apply</NavbarButton>
          </NavbarRight>
        </Navbar>
      </Form>
    );
  },
});

ResizeImageForm.propTypes = {
};

module.exports = ResizeImageForm;
