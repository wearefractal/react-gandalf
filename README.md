# react-gandalf [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
## Information
<table><br><tr><br><td>Package</td><br><td>react-gandalf</td><br></tr><br><tr><br><td>Description</td><br><td>React component for setup wizards and steps</td><br></tr><br><tr><br><td>Node Version</td><br><td>>= 0.10</td><br></tr><br></table>  

## Usage
## Install

```
npm install react-gandalf --save
```

## Example
### Wizard

```js
var Wizard = React.createClass({
  render: function(){
    var LoginStep = {
      name: 'Login',
      component: Login,
      skippable: false
    };
    var AddFriendsStep = {
      name: 'Add Friends',
      component: AddFriends,
      skippable: true
    };
    var FinishStep = {
      name: 'Finish Setup',
      component: FinishSetup,
      skippable: false
    };
    return Gandalf({
      steps: [
        LoginStep,
        AddFriendsStep,
        FinishStep
      ]
    });
  }
});
```

### Each Child Step

```js
var Login = React.createClass({
  PropTypes: {
    nextStep: PropTypes.func,
    previousStep: PropTypes.func
  }
  render: function() {
    return DOM.div({
      className: 'first'
    },
      DOM.button({
        className: 'button',
        onClick: this.props.nextStep
      }, 'Next');
    );
  }
})
```

## LICENSE
(MIT License)

Copyright (c) 2015 Fractal [contact@wearefractal.com](mailto:contact@wearefractal.com)

Permission is hereby granted, free of charge, to any person obtaining<br>a copy of this software and associated documentation files (the<br>"Software"), to deal in the Software without restriction, including<br>without limitation the rights to use, copy, modify, merge, publish,<br>distribute, sublicense, and/or sell copies of the Software, and to<br>permit persons to whom the Software is furnished to do so, subject to<br>the following conditions:

The above copyright notice and this permission notice shall be<br>included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,<br>EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF<br>MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND<br>NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE<br>LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION<br>OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION<br>WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[gittip-url]: https://www.gittip.com/wearefractal/
[gittip-image]: http://img.shields.io/gittip/wearefractal.svg
[downloads-image]: http://img.shields.io/npm/dm/react-gandalf.svg
[npm-url]: https://npmjs.org/package/react-gandalf
[npm-image]: http://img.shields.io/npm/v/react-gandalf.svg
[travis-url]: https://travis-ci.org/wearefractal/react-gandalf
[travis-image]: https://travis-ci.org/wearefractal/react-gandalf.png?branch=master
[coveralls-url]: https://coveralls.io/r/wearefractal/react-gandalf
[coveralls-image]: https://coveralls.io/repos/wearefractal/react-gandalf/badge.png
[depstat-url]: https://david-dm.org/wearefractal/react-gandalf
[depstat-image]: https://david-dm.org/wearefractal/react-gandalf.png
[david-url]: https://david-dm.org/wearefractal/react-gandalf
[david-image]: https://david-dm.org/wearefractal/react-gandalf.png?theme=shields.io
