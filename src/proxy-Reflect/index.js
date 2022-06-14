const colors = ['red']

const colorsLen = colors.length


/**
 * [q] 代理与反射是什么
 * 代理代替目标对象 同一个对象
 */


const targetObj ={
  desc:'target'
}

const p =new Proxy(targetObj,{},{})

p.name = 'proxy'

console.log(p);
console.log(targetObj);

/**
 * set 陷阱函数验证属性值
 */

let target = {
  name:'target'
}

let proxy = new Proxy(target,{
  set(trapTarget,key,val,receiver){
    if(!trapTarget.hasOwnProperty('key')){
      if(isNaN(val)){
        throw new TypeError('type error')
      }
    }

    return Reflect.set(trapTarget,key,val,receiver)
  }
})

proxy.count = 1

// proxy.add = 'add'

/**
 * get 陷阱
 */

const o = {
  // name:'target'
}

// console.log(o.name);


const op = new Proxy(o,{
  get(trapTarget,key,receiver){
    if(!(key in receiver)){
      throw new TypeError('type error')
    }

    return Reflect.get(trapTarget,key,receiver)
  }
})


/**
 * has
 */

const hasTarget = {
  name:'has-target',
  value:42
}


const hasP = new Proxy(hasTarget,{
  has(trapTarget,key){
    if(key === 'value'){
      return false
    }else {
      return Reflect.has(trapTarget,key)
    }
  }
})

/**
 * 函数的key 被删除
 */


const deleteTarget = {
  name:'target',
  value:12
}







// console.log(op.name);

console.log('proxy run');