import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

var ModuleA = function () {
  function ModuleA() {
    _classCallCheck(this, ModuleA);
  }

  _createClass(ModuleA, [{
    key: 'test',
    value: function test() {
      console.log('test');
    }
  }]);

  return ModuleA;
}();

export default ModuleA;


export function matest() {
  console.log('ModuleA test');
}