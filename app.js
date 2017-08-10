const express = require('express');
const app = express();
const routers = require('./routers/routers');

app.set('view engine','ejs');

app.get('/',routers.showAdd);

app.get('/doAdd',routers.doAdd);


app.listen(3000);
