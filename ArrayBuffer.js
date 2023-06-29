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
