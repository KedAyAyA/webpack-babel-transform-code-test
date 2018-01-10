// import 'babel-polyfill'

import moduleA from './modulea.js'
import { a } from './moduleb.js'

var c = a
console.log(moduleA)

export default class A {
  static test () {
    console.log('hehe')
    [1, 2].map(item => item * 2)
  }
}