var EventEmitter = require('events').EventEmitter
var life = new EventEmitter()
//修改事件监听最大值
life.setMaxListeners(11)
//addEventListener
function water (){
    console.log('给 ' + who + '倒水')
}
life.on('求安慰',water)
life.on('求安慰',function(who){
    console.log('给 ' + who + '002')
})
life.on('求安慰',function(who){
    console.log('给 ' + who + '003')
})
life.on('求安慰',function(who){
    console.log('给 ' + who + '004')
})
life.on('求安慰',function(who){
    console.log('给 ' + who + '005')
})
life.on('求安慰',function(who){
    console.log('给 ' + who + '006')
})
life.on('求安慰',function(who){
    console.log('给 ' + who + '007')
})
life.on('求安慰',function(who){
    console.log('给 ' + who + '008')
})
life.on('求安慰',function(who){
    console.log('给 ' + who + '009')
})
life.on('求安慰',function(who){
    console.log('给 ' + who + '010')
})
life.on('求安慰',function(who){
    console.log('给 ' + who + '累死了')
})
life.on('买买买',function(who){
    console.log('买衣服')
})

// life.emit('求安慰',"小程")
//移除事件
// life.removeListener('求安慰',water)
//批量移除
// life.removeAllListeners()

//查看事件是否被监听过
var  hasConfortLister = life.emit('求安慰',"小程");
var  hasConfortLister2 = life.emit('买买买');
var  hasConfortLister3 = life.emit('abc');
console.log(hasConfortLister);
console.log(hasConfortLister2);
console.log(hasConfortLister3)

//事件监听个数
console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life,'求安慰'))




