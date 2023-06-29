/**
 * 二进制数组 类数组的对象
 * ArrayBuffer 原始二进制数据
 * TypedArray 读写简单的二进制数据
 * DataView 读写复杂的二进制数据
 */

/**
 * 分配内存 32字节
 */
// const buf = new ArrayBuffer(32)
// console.log(buf);

// const dv = new DataView(buf)
// const ans = dv.getUint8(0)

// console.log('array-buffer run');

// 对固定长度的连续内存空间的引用
// const buffer = new ArrayBuffer(8)

// console.log(buffer)

// const newBuffer = buffer.slice(0, 3)
// console.log(newBuffer)
// 创建长度16的 buffer

const buffer = new ArrayBuffer(16)

const bl = buffer.byteLength

console.log('arraybuffer run')
