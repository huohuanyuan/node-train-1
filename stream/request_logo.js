//请求一个图片 在浏览器中显示出来

var http = require('http')
var fs = require('fs')

http
.createServer(function(req,res){
    // fs.readFile('logo.jpg',function(err,data){
    //     if(err){
    //         res.end('file not exist!')
    //     }
    //     else{
    //         res.writeHeader(200,{'Context-Type':'text/html'})
    //         res.end(data)
    //     }
    // })
    fs.createReadStream('logo.jpg').pipe(res)
})
.listen(8090)