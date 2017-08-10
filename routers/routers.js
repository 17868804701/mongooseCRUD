/**
 * Created by jiunuo on 2017/8/10.
 */
const student = require("../models/student.js");

exports.showAdd = function (req,res,next) {
    res.render('index')
};
exports.doAdd = function (req,res,next) {
    student.find({},function(err,result){
        console.log(result+'11111111111')
    });
};