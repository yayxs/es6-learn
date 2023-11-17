const obj = {  first:'hell',last:'wor' }

const {  first:f,last:l } = obj
console.log(f);
console.log(l);

const { message:msg = 'default msg' } = {}
console.log(msg);

const { x =3 } = {}
console.log(x);

// 数值

const { toString:s } = 123 
console.log(s);

console.log(s === Number.prototype.toString);

const map = new Map()
map.set('1',1)
map.set('2',2)

// 函数参数的默认值

const genConf = ( { async=true  } = {})=>{
  console.log(async);
}

genConf({})

for (const [k,val ] of map) {
  console.log(k,val);
}




// 输入模块的指定方法

// const {} require('')