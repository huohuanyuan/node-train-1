//再次重构复制图片的代码

var fs = require('fs')
//创建可读流和可写流
// var readStream = fs.createReadStream('img2.jpg')
// var writeStream = fs.createWriteStream('1-img.jpg')
fs.createReadStream('img2.jpg').pipe(fs.createWriteStream('1-pipe.jpg'))


