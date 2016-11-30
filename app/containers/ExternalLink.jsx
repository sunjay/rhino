const React = require('react');
const {connect} = require('react-redux');

const {
  openURL,
} = require('../actions/WindowActions');

const mapStateToProps = (state, props) => ({
  ...props,
});

const mapDispatchToProps = (dispatch, {href}) => ({
  onClick(e) {
    e.preventDefault();
    dispatch(openURL(href));
  },
});

// Technically this should be in a separate file
const ExternalLink = ({children, onClick, ...props}) => (
  <a {...props} onClick={onClick}>{children}</a>
);

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExternalLink);
