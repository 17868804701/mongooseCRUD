const express = require('express');
const app = express();
const routers = require('./routers/routers');

app.set('view engine','ejs');

app.get('/',routers.showAdd);//添加页面
app.get('/doAdd',routers.doAdd);//执行添加
app.get('/find',routers.find);//执行查找
app.get('/remove',routers.remove);//执行删除
app.get('/update',routers.update);//执行修改

app.listen(3000);
