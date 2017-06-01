const PropTypes = require('prop-types');
const React = require('react');

const {isValidSize, isDifferent} = require('../helpers/validators');
const {ratio} = require('../helpers/ratio');

const Form = require('./Form');
const FormGroup = require('./FormGroup');
const Label = require('./Label');
const Input = require('./Input');
const FormStatic = require('./FormStatic');
const Fieldset = require('./Fieldset');
const Navbar = require('./Navbar');
const NavbarButton = require('./NavbarButton');
const NavbarRight = require('./NavbarRight');

class ResizeImageForm extends React.Component {
  static propTypes = {
    initialWidth: PropTypes.number.isRequired,
    initialHeight: PropTypes.number.isRequired,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    onCancel() {},
    onSubmit() {},
  };

  state = {
    width: this.props.initialWidth,
    height: this.props.initialHeight,
    ratio: true,
  };

  onChangeDimension = (dim, event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && this.state.ratio && isValidSize(value)) {
      const {initialWidth, initialHeight} = this.props;

      let other, otherValue;
      if (dim === 'width') {
        other = 'height';
        otherValue = ratio(value, initialWidth, initialHeight);
      }
      else {
        other = 'width';
        otherValue = ratio(value, initialHeight, initialWidth);
      }
      this.setState({
        [dim]: value,
        [other]: otherValue,
      });
    }
    else {
      this.setState({
        [dim]: value,
      });
    }
  };

  onChangeMaintainRatio = (event) => {
    this.setState({
      ratio: event.target.checked,
    });
  };

  validate = () => {
    const {initialWidth, initialHeight} = this.props;
    const {width, height} = this.state;
    return (
      isValidSize(width) && isValidSize(height) &&
      (isDifferent(width, initialWidth) || isDifferent(height, initialHeight))
    );
  };

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
          <FormGroup layout='horizontal' isValid={isValidSize(width)}>
            <Label>Width:&nbsp;</Label>
            <Input type='number' min={1} value={width}
              onChange={(e) => this.onChangeDimension('width', e)} />
            <FormStatic>pixels</FormStatic>
          </FormGroup>
          <FormGroup layout='horizontal' isValid={isValidSize(height)}>
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
  }
}

module.exports = ResizeImageForm;
