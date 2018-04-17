// Write to a buffer
// const buff = new Buffer(256)
// len = buff.write('123234235235')
// console.log('Octets written: ' + len)
// console.log(buff.toString('ascii'))


// Read from a buffer
// buff = new Buffer(26)
// for (let i = 0; i < 26; i++) {
//   buff[i] = i + 97
// }
// console.log(buff.toString('ascii'))
// console.log(buff.toJSON(buff))


// Concatenate buffers
// const buffer1 = new Buffer('Testing ')
// const buffer2 = new Buffer('More Code')
// const buffer3 = Buffer.concat([buffer1, buffer2])
// console.log(buffer3.toString())


// Compare buffers
// const buffer1 = new Buffer('ABC')
// const buffer2 = new Buffer('ABCD')
// const result = buffer1.compare(buffer2);
// console.log(buffer1.length)
// if (result < 0) {
//   console.log(buffer1 +" comes before " + buffer2);
// } else if (result == 0){
//   console.log(buffer1 +" is same as " + buffer2);
// } else {
//   console.log(buffer1 +" comes after " + buffer2);
// }


// Copy Buffer
// const buffer1 = new Buffer('ABC')
// const buffer2 = new Buffer(3)
// buffer1.copy(buffer2)
// console.log('Buffer2: ' + buffer2)


// Slice Buffer
// const buffer1 = new Buffer('TestingBufferSlice')
// const buffer2 = buffer1.slice(0, 7)
// console.log(buffer2.toString())

// Slice Example
// const buffer1 = new Buffer(8)
// buffer1.write('10110100')

// console.log(buffer1.toString())
// const header = buffer1.slice(0,4)
// console.log('Header: ' + header.toString())
