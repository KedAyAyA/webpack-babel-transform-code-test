var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import 'babel-polyfill'

import moduleA from './modulea.js';
import { a } from './moduleb.js';

var c = a;
console.log(moduleA);

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
    }
  }]);

  return A;
}();

export default A;