/**
 *  事件移除
 */

const EventEmitter = require('events');

//继承
class CustomEvent extends EventEmitter {}

function fn1 () {
    console.log('fn1')
}

function fn2 () {
    console.log('fn2')
}

const ce = new CustomEvent();


ce.on('test',fn1);
ce.on('test',fn2);

setInterval(() => {
    ce.emit('test')
},500)

//移除
setTimeout(() => {
    ce.removeListener('test',fn2);
    //移除所有的
    // ce.removeAllListener('test')
},1500)