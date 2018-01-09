// import 'babel-polyfill'

import moduleA from './modulea.js'
import * as moduleB from './moduleb.js'

moduleB.test()
var c = moduleB.a
console.log(moduleA)

export default class A {
  static test () {
    console.log('hehe')
    [1, 2].map(item => item * 2)
  }
}