const PropTypes = require('prop-types');
const React = require('react');

const Select = require('./Select');

const anchors = ['NW', 'N', 'NE', 'W', 'Middle', 'E', 'SW', 'S', 'SE'];
const anchorNames = {
  NW: 'Top Left',
  N: 'Top',
  NE: 'Top Right',
  W: 'Left',
  Middle: 'Center Middle',
  E: 'Right',
  SW: 'Bottom Left',
  S: 'Bottom',
  SE: 'Bottom Right',
};

const AnchorSelect = ({value, onChange}) => (
  <Select value={value} onChange={(e) => onChange(e.target.value)}>
    {anchors.map((anchor) => (
      <option key={anchor} value={anchor}>{anchorNames[anchor]}</option>
    ))}
  </Select>
);

AnchorSelect.propTypes = {
  value: PropTypes.oneOf(anchors).isRequired,
  onChange: PropTypes.func,
};

module.exports = AnchorSelect;
