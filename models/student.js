/**
 * Created by jiunuo on 2017/8/10.
 */
const mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    name     :  {type : String},
    age      :  {type : Number},
    sex      :  {type : String}
});
// //查找学生方法
studentSchema.statics.findStudent = function(name, callback) {
    this.model('Student').find({name: name}, callback);
    //this.model('Student')指的是当前这个类
};
// //修改学生信息方法
// studentSchema.statics.update = function(conditions,update,options,callback){
//     this.model("Student").update(conditions, update, options, callback);
//     //参数，第一个要改的字段，第二个要改成什么，第三个可以不传，第四个为回掉函数
// };
// //修改方法参数示例比如：
// Student.update({"name":"小明"},{$set : {"age":30}},{},function(){
//     console.log("改年龄成功");
// });
//类是基于schema创建的。
var studentModel = mongoose.model('Student', studentSchema);

module.exports = studentModel;