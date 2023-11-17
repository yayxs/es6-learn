/**
 * promise 容器
 * 未来才会结束的事件
 * 作业队列 job queue
 * 事件循环  内部处理线程
 */

/**
 * promise 的生命周期 
 * pending state 挂起
 * unsettled
 * settled
 *  fulfilled 成功结束
 *  rejected 
 * 
 * resolve 
 */
const fs = require('fs')

const readFile = (fileName)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(fileName,{ encoding:'utf8' },(err,val)=>{
      if(err){
        reject(err)
        return
      }
      resolve(val)
    })
  })
}

const p = readFile('examp.txt')

p.then(()=>{},(err)=>{
  console.log(err);
})




console.log('promise run');