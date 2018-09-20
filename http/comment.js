var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
    noticeTittle: "中秋节的祝福",
    noticeContent: "但愿人长久，千里共婵娟"
})

var options = {
    hostname: "www.m-edoc.com",
    port: "80",
    path: "/edoc/notice/send",
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mzc0MzYyNzYsImVtYWlsIjoiaXRsaWJvQG0tY2xpbmljYWwuY24ifQ.bpALzdl-8ScOQmRhcm8C9nlwRPyzEZGj0xS8R_GQ1lY',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'www.m-edoc.com',
        'Origin': 'https://www.m-edoc.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.m-edoc.com/manage/notice-manage',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
    }
}

var req = http.request(options,function(res){
    console.log('status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    
    })
    res.on('end',function(){
        console.log("完毕")
    })

})
req.on('error',function(e){
    console.log('Error: ' + e.message)
})
req.write(postData)
req.end()
