/**
 * 循环中的块级作用域
 */

var funcs = []



for(var i =0 ;i<3;i++){
  funcs[i] = function(){
    console.log(i);
  }
}


funcs[0]()


for(let i = 0;i<3;i++){
  let i = '123'
  console.log(i);
}

for(var i = 0;i<3;i++){
  var i = 'abc'
  console.log(i);
}



console.log('let load');