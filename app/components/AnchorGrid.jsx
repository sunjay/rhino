const PropTypes = require('prop-types');
const React = require('react');
const Icon = require('react-fontawesome').default;

const Button = require('./Button');

const {
  anchorGrid,
  anchorPoint,
} = require('../../scss/components/anchorGrid.scss');

const anchors = ['NW', 'N', 'NE', 'W', 'Middle', 'E', 'SW', 'S', 'SE'];
const anchorPositions = {
  NW: [-1, 1],
  N: [0, 1],
  NE: [1, 1],
  W: [-1, 0],
  Middle: [0, 0],
  E: [1, 0],
  SW: [-1, -1],
  S: [0, -1],
  SE: [1, -1],
};

const deltaIcons = {
  '1,-1': 'arrow-nw',
  '0,-1': 'arrow-n',
  '-1,-1': 'arrow-ne',
  '1,0': 'arrow-w',
  '-1,0': 'arrow-e',
  '1,1': 'arrow-sw',
  '0,1': 'arrow-s',
  '-1,1': 'arrow-se',
};

// sign is used to flip the arrows when necessary
const AnchorGrid = ({value, onChange, xSign = 1, ySign = 1}) => (
  <div className={anchorGrid}>
    {anchors.map((anchor) => (
      <AnchorPoint key={anchor} value={anchor} xSign={xSign} ySign={ySign}
        current={value} onClick={onChange} />
    ))}
  </div>
);

AnchorGrid.propTypes = {
  value: PropTypes.oneOf(anchors).isRequired,
  onChange: PropTypes.func,
  xSign: PropTypes.oneOf([-1, 1]),
  ySign: PropTypes.oneOf([-1, 1]),
};

const AnchorPoint = ({value, current, xSign, ySign, onClick}) => {
  let content;
  if (value === current) {
    content = (
      <Icon name='picture-o' />
    );
  }
  else {
    const [vx, vy] = anchorPositions[value];
    const [cx, cy] = anchorPositions[current];
    const dx = cx - vx;
    const dy = cy - vy;

    const icon = deltaIcons[`${dx * xSign},${dy * ySign}`];

    content = icon ? (
      <Icon name={icon} />
    ) : (
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
  value: PropTypes.oneOf(anchors).isRequired,
  current: PropTypes.oneOf(anchors).isRequired,
  xSign: PropTypes.oneOf([-1, 1]).isRequired,
  ySign: PropTypes.oneOf([-1, 1]).isRequired,
  onClick: PropTypes.func,
};

module.exports = AnchorGrid;
