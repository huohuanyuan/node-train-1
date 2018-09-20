var student = require('./studuent')
var teacher = require('./teacher')


function add (teacherName,students){
    teacher.add(teacherName)
    students.forEach((item,index )=> {
        student.add(item)
    });
}
//传统的模块实例
exports.add = add;
//特别的对象类型
// module.exports = add;
