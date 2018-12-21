const fs = require('fs');

//创建一个可写流
const ws = fs.createWriteStream('./test.txt');
//每隔200ms生产一个数字
const tid = setInterval(() => {
    const num = parseInt(Math.random() * 10);
    console.log(num);
    if(num<8){
        ws.write(num + '')
    }else{
        clearInterval(tid)
        ws.end();
    }
},200);

ws.on('finish',() => {
    console.log('done!')
})

