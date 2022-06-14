
/**
 * 含义
 */
const fs = require('fs')


const readFile  = function(fileName){
  return new Promise((resolve,reject)=>{
    fs.readFile(fileName,(err,data)=>{
      if(err) return reject(err)
      resolve(data)
    })
  })
}

const gen = function *(){
  const f1 = yield readFile('./a.js')
  const f2 = yield readFile('./b.js')
  console.log(f1);
}


/**
 * async vs Generator 
 */


function timeout(ms) {
  return new Promise((resolve)=>{
    setTimeout(resolve,ms)
  })
}

async function print(val,ms){


  await timeout(ms)
  console.log(val);
}

print('name',20)


/**
 * 语法
 */


async function foo(){
  return 'hello'
}
foo().then(v=>console.log(v))


/**
 * await 命令
 */

async function bar(){
  return await 123
}

console.log('async run');