const fs = require('fs');
//删除
fs.unlink('./test.txt', err => {
    if(err) throw err;
    console.log('done')
})