Some test code to learn how webpack & babel work during compiling.
- webpack-only-index

  Use webpack only.

- webpack-babel-index

  Use webpack + babel

- webpack-babel-polyfill-index
  
  Use webpack + babel & babel-polyfill. more 200kb+

- webpack-babel-runtime-index

  Use webpack + babel & babel-runtime & transform-runtime plugins

  Transform Symbol, Map, Set etc. if you use. So it is always lighter.

  Only for static function. Like String.prototype.include method always need babel-polyfill

- babel-only-runtime-index

  Use babel-runtime.

- babel-only-modules-index

  Use babel module transform can't use webpack tree-shaking

- babel-webpack-modules-index

  Set module false to use webpack tree-shaking

