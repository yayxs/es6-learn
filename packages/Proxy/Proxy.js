/**
 * 使用 proxy创建一个代理对象 只能代理对象
 * 无法代理非对象的值
 * 代理 对一个对象基本语义的代理
 */

const fn = (name) => {
  console.log('is', name)
}

const proxyFunc = new Proxy(fn, {
  apply(target, thisArg, argArray) {
    target.call(thisArg, ...argArray)
  }
})

proxyFunc('van')
