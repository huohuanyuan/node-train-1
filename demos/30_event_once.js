/**
 * 有些事件有N中情况触发，但是只想让对应的事件处理程序执行一次
 */

const EventEmitter = require('events');

//继承
class CustomEvent extends EventEmitter {}

//实例化
const ce = new CustomEvent();

ce.once('test',() => {
    console.log('test event')
});

setInterval(() => {
    ce.emit('test')
},500)