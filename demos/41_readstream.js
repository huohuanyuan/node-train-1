const fs = require('fs');


//创建一个readstream
const rs = fs.createReadStream('./41_readstream.js');

//方向(输出到控制台)
 rs.pipe(process.stdout);

