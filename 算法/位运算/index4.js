// const num = 5  // 00000000000000000000000000101
// const res = ~num  // 111111111111111111111111010

// let n = -6

// 00000110
// 11111001 + 1
// 11111010 -6 二进制的补码 最高位表示符号位
// 1111010 -6

function reverseBit(str) {
    const n = parseInt(str, 2)
    return ~n
}

const binaryStr = '00001101'
const reverseStr = reverseBit(binaryStr) 