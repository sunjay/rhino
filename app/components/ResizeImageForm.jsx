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
    onSubmit: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      onCancel() {},
      onSubmit() {},
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
    const value = event.target.value;
    if (this.state.ratio && this.validSize(value)) {
      const {initialWidth: width, initialHeight: height} = this.props;

      const other = dim === 'width' ? 'height' : 'width';
      const factor = dim === 'width' ? (height / width) : (width / height);
      this.setState({
        [dim]: value,
        [other]: Math.round(value * factor),
      });
    }
    else {
      this.setState({
        [dim]: value,
      });
    }
  },

  onChangeMaintainRatio(event) {
    this.setState({
      ratio: event.target.checked,
    });
  },

  validSize(value) {
    value = parseFloat(value);
    return !!value && Number.isInteger(value) && value > 0;
  },

  validate() {
    const {initialWidth, initialHeight} = this.props;
    const {width, height} = this.state;
    return (
      initialWidth !== width && initialHeight !== height &&
      this.validSize(width) && this.validSize(height)
    );
  },

  render() {
    const {onCancel, onSubmit} = this.props;
    const {width, height, ratio} = this.state;

    const submit = (e) => {
      e.preventDefault();
      onSubmit(width, height);
    };

    return (
      <Form onSubmit={submit}>
        <Fieldset>
          <legend>Pixel Dimensions</legend>
          <FormGroup layout='horizontal' isValid={this.validSize(width)}>
            <Label>Width:&nbsp;</Label>
            <Input type='number' min={1} value={width}
              onChange={(e) => this.onChangeDimension('width', e)} />
            <FormStatic>pixels</FormStatic>
          </FormGroup>
          <FormGroup layout='horizontal' isValid={this.validSize(height)}>
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
          <NavbarRight>
            <NavbarButton style='primary' type='submit'
              disabled={!this.validate()}>
              Apply
            </NavbarButton>
            &nbsp;
            <NavbarButton onClick={onCancel}>Cancel</NavbarButton>
          </NavbarRight>
        </Navbar>
      </Form>
    );
  },
});

ResizeImageForm.propTypes = {
};

module.exports = ResizeImageForm;
