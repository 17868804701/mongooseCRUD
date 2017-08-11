/**
 * Created by jiunuo on 2017/8/10.
 */
const student = require("../models/student.js");

exports.showAdd = function (req, res, next) {
    res.render('index')
};
// 添加学生
exports.doAdd = function (req, res, next) {
    let name = req.query.name;
    let age = req.query.age;
    student.create({"name": name, "age": age}, function (err, result) {
        if (err) {
            res.send('添加失败')
        }
        res.send('添加成功');
    });
};
// 查找学生
exports.find = function (req, res, next) {
    student.find('小红', function (err, result) {
        if (err) {
            res.send
            res.send('查询失败');
        }
        res.send(result);
    }).skip(1).limit(1);
};
// 修改学生信息
exports.update = function (req, res, next) {
    student.update({'name': '小红'}, {$set: {"age": "1"}}, function (err, result) {
        if (err) {
            res.send('修改失败')
        }
        res.send('修改成功')
    })
};
// 删除学生信息
exports.remove = function (req, res, next) {
    student.remove({"name": "黄森"}, function (err, result) {
        if (err) {
            res.send('删除失败')
        }
        res.send('删除成功')
    })
};