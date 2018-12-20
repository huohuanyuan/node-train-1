const fs = require('fs');

//监听文件
fs.watch('./',{
    recursive:true,//是否递归循环
},(eventType,filename) => {
    console.log(eventType,filename)
})
