const fs = require('fs');
//新建文件夹
fs.mkdir('test', (err) => {
    if(err) throw err;
    console.log('done')
})