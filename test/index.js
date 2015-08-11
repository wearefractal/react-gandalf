'use strict';

var React = require('react');
var ReactAddons = require('react/addons');
var TestUtils = React.addons.TestUtils;

var should = require('should');
var Gandalf = React.createFactory(require('../'));

var Dummy = function(num){
  return React.createFactory(React.createClass({
    render: function(){
      return React.DOM.div(null, 'Dummy ' + num);
    }
  }));
}

describe('react-gandalf', function() {
  it('should export a react component', function(done) {
    should.exist(Gandalf);
    (typeof Gandalf).should.equal('function');
    done();
  });
});

describe('Gandalf()', function() {
  it('should be able to skip steps', function(done) {
    var Step1 = {
      name: 'TestStep1',
      component: Dummy(1),
      skippable: true
    };
    var Step2 = {
      name: 'TestStep2',
      component: Dummy(2),
      skippable: true
    };
    var inst = Gandalf({
      steps: [Step1, Step2]
    });

    var cmp = TestUtils.renderIntoDocument(inst);
    var el = cmp.getDOMNode();

    should.exist(el);
    should.exist(el.children);
    el.textContent.indexOf('Dummy 1').should.not.equal(-1);

    cmp.nextStep();
    el.textContent.indexOf('Dummy 2').should.not.equal(-1);

    done();
  });
});

describe('Gandalf()', function() {
  it('should be possible to call previousStep from Step1', function(done) {
    var Step1 = {
      name: 'TestStep1',
      component: Dummy(1),
      skippable: true
    };
    var inst = Gandalf({
      steps: [Step1]
    });

    var cmp = TestUtils.renderIntoDocument(inst);
    var el = cmp.getDOMNode();

    should.exist(el);
    should.exist(el.children);
    el.textContent.indexOf('Dummy 1').should.not.equal(-1);

    cmp.previousStep();
    el.textContent.indexOf('Dummy 1').should.not.equal(-1);

    done();
  });
});

describe('Gandalf()', function() {
  it('should be possible to call nextStep from last step', function(done) {
    var Step1 = {
      name: 'TestStep1',
      component: Dummy(1),
      skippable: true
    };
    var inst = Gandalf({
      steps: [Step1]
    });

    var cmp = TestUtils.renderIntoDocument(inst);
    var el = cmp.getDOMNode();

    should.exist(el);
    should.exist(el.children);
    el.textContent.indexOf('Dummy 1').should.not.equal(-1);

    cmp.nextStep();
    el.textContent.indexOf('Dummy 1').should.not.equal(-1);

    done();
  });
});