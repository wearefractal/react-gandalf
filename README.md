# react-gandalf [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]


## Information

<table>
<tr>
<td>Package</td>
<td>react-gandalf</td>
</tr>
<tr>
<td>Description</td>
<td>React component for setup wizards and steps</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

## Install

```
npm install react-gandalf --save
```
## Example

TODO: docs on propTypes for main component
TODO: docs on what each step shape is

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

## LICENSE

(MIT License)

Copyright (c) 2015 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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
