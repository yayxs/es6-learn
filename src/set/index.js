
const set =Object.create(null)

set.foo = true

if(set.foo){
  // console.log('do');
}

/**
 * set 使用方法
 */

let s = new Set(),
key1 = {}
key2 = {}


s.add(1)
s.add('1')
s.add(key1)
s.add(key2)

// console.log(s.size);

/**
 * 数组初始化一组数据
 */

let arraySet  = new Set([1,2,3,4,5,5])
// console.log(arraySet.size);


/**
 * set 的forEach
 */

const setFor = new Set([1,2])

setFor.forEach((val,key,o)=>{
  // console.log('--');
  // console.log(val);
  // console.log(key);
  // console.log(o);
})

/**
 * set 转数组
 */

let targetSet = new Set([1,1,1])
const ans = [...targetSet]

/**
 * weak set
 */

const setter = new Set()

let key = {}

setter.add(key)

console.log(setter);

console.log(setter.size);

// 取消原始引用

key = null


console.log(setter.size);
// 重新获取原始引用

key = [...setter][0]

/**
 * weak set
 */
const weakSet = new WeakSet()

const weakKey = {}

weakSet.add(weakKey)

console.log(weakSet.has(weakKey));

weakSet.delete(weakKey)

/**
 * 对象的弱引用
 */

let ws = new WeakSet(),wk= {}

ws.add(wk)

// ws.add(1)

// console.log(ws.size());




console.log('set run');