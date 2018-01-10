// import 'babel-polyfill'

import moduleA from './modulea.js'
import * as moduleB from './moduleb.js'

moduleB.test()
// var c = moduleB.a
console.log(moduleA)

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
Object.assign({}, {
  a: 1,
  b: 'hehe'
})

export default class A {
  static test () {
    console.log('hehe')
    [1, 2].map(item => item * 2)
    "123".include('1')
  }
}