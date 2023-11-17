const array = []

array.map(it=>console.log(it))

/**
 * babel 转码：
 */

 for(let i = 0;i<3;i++){
  let i = '123'
  console.log(i);
}

for(var i = 0;i<3;i++){
  var i = 'abc'
  console.log(i);
}