/**
 * Created by jiunuo on 2017/8/10.
 */
const mongoose = require('mongoose');
var db = require("./db.js");
var studentSchema = new mongoose.Schema({
    name     :  {type : String},
    age      :  {type : Number}
});
// // //查找学生方法
// studentSchema.statics.findStudent = function(name, callback) {
//     this.model('student').find({name:name}, callback);
//     //this.model('Student')指的是当前这个类
// };
//类是基于schema创建的。
var studentModel = db.model('student', studentSchema);

module.exports = studentModel;