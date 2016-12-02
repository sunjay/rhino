const React = require('react');
const Icon = require('react-fontawesome').default;

const Button = require('./Button');

const {
  anchorGrid,
  anchorPoint,
} = require('../../scss/components/anchorGrid.scss');

const anchors = ['NW', 'N', 'NE', 'W', 'Middle', 'E', 'SW', 'S', 'SE'];

const AnchorGrid = ({value, onChange}) => (
  <div className={anchorGrid}>
    {anchors.map((anchor) => (
      <AnchorPoint key={anchor} value={anchor} current={value} onClick={onChange} />
    ))}
  </div>
);

AnchorGrid.propTypes = {
  value: React.PropTypes.oneOf(anchors).isRequired,
  onChange: React.PropTypes.func,
};

const AnchorPoint = ({value, current, onClick}) => {
  let content;
  if (value === current) {
    content = (
      <Icon name='picture-o' />
    );
  }
  else {
    content = (
      <span>&nbsp;</span>
    );
  }
  return (
    <Button className={anchorPoint} onClick={() => onClick(value)}>
      {content}
    </Button>
  );
};

AnchorPoint.propTypes = {
  value: React.PropTypes.oneOf(anchors).isRequired,
  current: React.PropTypes.oneOf(anchors).isRequired,
  onClick: React.PropTypes.func,
};

module.exports = AnchorGrid;
