// Reading from a stream
// const fs = require('fs')
// let data = ''
// const readStream = fs.createReadStream('input.txt')
// readStream.setEncoding('UTF8')

// readStream.on('data', (chunk) => {
//   data += chunk
// })

// readStream.on('end', () => {
//   console.log(data)
// })

// readStream.on('error', (err) => {
//   console.log(err.stack)
// })
// console.log('Program ended')



// Writing to a stream
// const fs = require('fs')
// let data = 'Write this somewhere'

// let writeStream = fs.createWriteStream('output.txt')
// writeStream.write(data, 'UTF8')
// writeStream.end()

// writeStream.on('finish', function() {
//   console.log("Write completed.");
// });

// writeStream.on('error', function(err){
//  console.log(err.stack);
// });

// console.log("Program Ended");



// Piping Streams
// const fs = require('fs')

// let readStream = fs.createReadStream('input.txt')

// let writeStream = fs.createWriteStream('output.txt')

// readStream.pipe(writeStream)
// console.log('Program Ended')


// Chaining Streams
// const fs = require('fs')
// const zlib = require('zlib')

// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'))

// console.log("File Compressed")  

var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("File Decompressed.");