//重构复制图片的代码

var fs = require('fs')
//创建可读流和可写流
var readStream = fs.createReadStream('img2.jpg')
var writeStream = fs.createWriteStream('1-img.jpg')
//but 如果读的快 写的慢，因为磁盘IO的读写速度并不是恒定的，数据流内部的缓存会爆仓，解决方法
//判断write方法，看传入的数据是否已经写入到目标
readStream.on('data',function(chunk){
    if(   writeStream.write(chunk) === false){//数据还在缓存区，没有写入目标
        console.log('still cached')
        readStream.pause()//暂停读取
    }
 
})

readStream.on('end',function(){
    writeStream.end()
})
//数据已经写入目标了
writeStream.on('drain',function(){
    console.log('data drains')
    readStream.resume()
})
