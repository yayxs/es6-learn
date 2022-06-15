
/**
 * Promise 构造函数
 * 
 * @params {func } 
 * rejectFunc 参数 Error 对象的实例
 * resolveFunc 参数 另外一个p
 */

// const p = new Promise(( resolveFunc,rejectFunc )=>{
//   console.log('promise 执行器');
// })

// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>reject(new Error('fail'),3000))
// })

// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(() => resolve(p1), 1000)
// })






/**
 * es8 引入的
 */

const f = ()=>{
  console.log('f',f);
}



console.log('promise run -------');