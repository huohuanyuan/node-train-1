const fs = require('fs');

//异步
fs.readFile('./32_readFile.js',(err,data) => {
    if(err) throw err;
    console.log(data)
})

//同步
const data = fs.readFileSync('./32_readFile.js');
console.log(data)

