'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import 'babel-polyfill'

var _modulea = require('./modulea.js');

var _modulea2 = _interopRequireDefault(_modulea);

var _moduleb = require('./moduleb.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var c = _moduleb.a;
console.log(_modulea2.default);

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

exports.default = A;