//实现定制的可读流 可写流 转换流 ，并且实现他们的内置接口

var stream = require('stream')
var util = require('util')

function ReadStream() {
    stream.Readable.call(this)
}
//让我们声明的ReadStream继承可读流里面的原型stream.Readable
util.inherits(ReadStream, stream.Readable)

//为可读流添加原型链上面的read方法
ReadStream.prototype._read = function () {
    this.push('I ')
    this.push('LOVE ')
    this.push('YOU\n')
    this.push(null)
}
function WritStream(){
    stream.Writable.call(this)
    this._cached = new Buffer('')
}

util.inherits(WritStream, stream.Writable)

//重新write方法
WritStream.prototype._write = function(chunk,encode,cb){
    console.log(chunk.toString())
    cb()
}


//定制转换流
function TransformStream(){
    stream.Transform.call(this)
}

util.inherits(TransformStream,stream.Transform)

TransformStream.prototype._transform = function(chunk,encode,cb){
    this.push(chunk)
    cb()
}


TransformStream.prototype._flush = function(cb){
    this.push('oh yeah!')
    cb()
}

//生成实例

var rs = new ReadStream()
var ws = new WritStream()
var ts = new TransformStream()

rs.pipe(ts).pipe(ws)