/**
 * WeakMap 对key的弱引用 不影响垃圾回收器的工作
 */

const map = new Map()
const weakmap = new WeakMap()
;(function () {
  const foo = { foo: 1 }
  const bar = { bar: 2 }
  map.set(foo, 1)
  weakmap.set(bar, 2)
})()
