//模拟搭建https服务器
var https = require('https')
 var fs = require('fs')

 var options = {
     key:fs.readdirSync('ssh_hey.pem'),
     cert:fs.readdirSync('ssh_cert.pem')
 }

 https.createServer(options,function(req,res){
     res.writeHead(200)
     res.end('Hello Imooc')
 })
 .listen(8090)