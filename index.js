'use strict';

var React = require('react');
var merge = require('lodash.merge');
var Multistep = require('react-multistep').Multistep

var DOM = React.DOM;
var PropTypes = React.PropTypes;

module.exports = React.createClass({
  displayName: 'Gandalf',
  propTypes: {
    allowBack: PropTypes.bool,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        skippable: PropTypes.bool,
        component: PropTypes.func
      })
    ).isRequired
  },
  getDefaultProps: function(){
    return {
      allowBack: true
    };
  },
  previousStep: function(){
    this.refs.stepper.previous();
  },
  nextStep: function(){
    this.refs.stepper.next();
  },
  getSteps: function(){
    return this.props.steps.map(transformStep, this);
  },
  render: function(){
    var props = merge({
      ref: 'stepper',
      steps: this.getSteps()
    }, this.props);

    return MultiStep(props);
  }
});

function transformStep(cfg){
  var goBack = this.props.allowBack ? this.previousStep : null;
  return {
    name: cfg.name,
    component: cfg.component({
      skippable: cfg.skippable,
      nextStep: this.nextStep,
      previousStep: goBack
    })
  };
}