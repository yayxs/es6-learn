/**
 * 二进制数组 类数组的对象
 * ArrayBuffer 原始二进制数据
 * TypedArray 读写简单的二进制数据
 * DataView 读写复杂的二进制数据
 */

/**
 * 分配内存 32字节
 */
const buf = new ArrayBuffer(32)
console.log(buf);

const dv = new DataView(buf)
const ans = dv.getUint8(0)


console.log('array-buffer run');