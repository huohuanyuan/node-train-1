/*
 * @instraction:复制一个图片，适合小体积的文件
 */




var fs = require('fs')


//读出png，创建到一个buffer中
fs.readFile('logo.jpg',function(err,origin_buffer){
    console.log(Buffer.isBuffer(origin_buffer));
    fs.writeFile('logo_buffer.jpg',origin_buffer,function(err){
        if(err)console.log(err)
    })

    // var base64Image = new Buffer(origin_buffer).toString('base64')
    var base64Image = origin_buffer.toString('base64');

    console.log(base64Image)

    var decodedImage = new Buffer(base64Image,'base64')

    console.log(Buffer.compare(origin_buffer,decodedImage))

    fs.writeFile('logo_decoded.jpg',decodedImage,function(err){
        if(err)console.log(err)
    })
})
