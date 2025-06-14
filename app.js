var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/usersRouter');
const db = require("./config/mongoose-connection");

console.log(process.env.NODE_ENV)

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
//app.use('/users', usersRouter);


app.listen(3000,function(){
  console.log("Server is running......")
});

