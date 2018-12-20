const fs = require('fs');
//读文件夹
fs.readdir('../', (err,files) => {
    if(err) throw err;
    console.log(files)
})