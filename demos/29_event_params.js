const EventEmitter = require('events');

//继承
class CustomEvent extends EventEmitter {}

//实例化
const ce = new CustomEvent();

//程序出现未知错误，通知事件处理程序
ce.on('error', (err,time) => {
    console.log(err)
    console.log(time)
})

ce.emit('error',new Error('opps'),Date.now())

