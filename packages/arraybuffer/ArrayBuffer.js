{
  // 4字节的内存区域 每个字节的默认值都是0
  const buf = new ArrayBuffer(4)

  const dataView = new DataView(buf)

  let string = '1234565'

  const index0 = (string >> 24) & 0xff
  const index1 = (string >> 16) & 0xff
  const index2 = (string >> 8) & 0xff
  const index3 = (string >> 0) & 0xff
  dataView.setInt8(0, index0)
  dataView.setInt8(1, index1)
  dataView.setInt8(2, index2)
  dataView.setInt8(3, index3)

  const bufType = typeof buf

  function arrayBuf2hexStr(buffer) {
    const hexArr = Array.prototype.map.call(
      new Uint8Array(buffer),
      (bit, index) => {
        console.log('--', index, bit)
        let str = '00' + bit.toString(16)
        console.log('-- str', str)
        return str.slice(-2)
      }
    )
    console.log(hexArr)
    return hexArr.join('')
  }

  const hexStr = arrayBuf2hexStr(buf)

  console.log('000'.slice(-2))
}

{
  /**
   * 2011年2月发布的独立规格
   * 二进制数组：ArrayBuffer TypedArray DataView
   *
   * ArrayBuffer 内存中一段二进制的数据，通过视图操作
   * TypedArray视图 9种
   */

  const buf = new ArrayBuffer(32) // 其中字节是32

  const dataView = new DataView(buf)

  /**
   * 从头读取8位二进制数据 1个字节
   */
  const index0 = dataView.getUint8(0) // 0
  console.log(index0 === 0) // true
}

{
  const buf = new ArrayBuffer(12) // 同一段内存

  const x1 = new Int32Array(buf) // 32位带符号

  x1[0] = 1

  const x2 = new Uint8Array(buf) // 8位不带符号
  x2[0] = 2

  console.log(x1[0] === 2)
}

{
  const typedArray = new Uint8Array([0, 1, 2])

  const typedArrayLength = typedArray.length

  typedArray[0] = 5
}

{
  /**
   * 内存区域的字节的长度
   */

  const buffer = new ArrayBuffer(32)

  const byteLen = buffer.byteLength

  const hexString =
    '0103e84c7b22646964223a223032344634323535303031343032303232303331353936333230313531333531222c226f62754368616c6c656e6765223a2230423938373538463334434241313531227d'
  function hexStr2byteArray(str) {
    const byteArray = new Uint8Array(
      str.match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16)
      })
    )
    return byteArray
  }

  let str =
    '0103e84c7b22646964223a223032344634323535303031343032303232303331353936333230313531333531222c226f62754368616c6c656e6765223a2230423938373538463334434241313531227d'

  const regex = /[\da-f]{2}/gi

  const array = str.match(regex)

  const arr = array.map((item) => {
    // console.log('item', item)

    return Number.parseInt(item, 16)
  })
}
