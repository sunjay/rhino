const React = require('react');

const Input = require('./Input');

const Textarea = (props) => (
  <Input {...props} type='textarea' />
);

module.exports = Textarea;
