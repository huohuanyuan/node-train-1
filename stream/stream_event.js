var fs = require('fs')
//声明一个只读的流
var readStream = fs.createReadStream('stream_copy_logo.js')

// var n = 0;

readStream
    //数据正在传输是触发on data事件
.on('data',function(chunk){
    // n++;
    console.log('data emits')
    console.log(Buffer.isBuffer(chunk))   
    console.log(chunk.toString('utf8'))

    //让刻度流暂停
    // readStream.pause()
    // console.log('data pause')
    // setTimeout(function(){
    //     console.log('data pause end')
    //     //重新启动数据传递
    //     readStream.resume()
    // },3000)

})
.on('readable',function(){
    console.log('data readable')
})
.on('end',function(){
    // console.log(n)
    console.log('data ends')
})
.on('close',function(){
    console.log('data close')
})
.on('error',function(e){
    console.log('data read error' + e)
})