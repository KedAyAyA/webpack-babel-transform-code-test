import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _Object$assign from 'babel-runtime/core-js/object/assign';
// import 'babel-polyfill'

import moduleA from './modulea.js';
import * as moduleB from './moduleb.js';

moduleB.test();
// var c = moduleB.a
console.log(moduleA);

// var p = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve(1)
//   } else {
//     reject('error')
//   }
// })
// p.then(num => {
//   console.log(num)
// }).catch(e => {
//   console.log(e)
// })
_Object$assign({}, {
  a: 1,
  b: 'hehe'
});

var A = function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, null, [{
    key: 'test',
    value: function test() {
      console.log('hehe')[(1, 2)].map(function (item) {
        return item * 2;
      });
      "123".include('1');
    }
  }]);

  return A;
}();

export default A;