var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var TheatreRouter = require('./routes/theatre')
var usersRouter = require('./routes/users');

var app = express();

//DB:
//const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@10-10tv-qpyka.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`
const MONGODB_URI = 'mongodb://localhost:27017/zaynabdb';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/theatre', TheatreRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


mongoose.connect(MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true })
  .then(result => {
    console.log('>> MONGODB : connected successfully!')
    console.log('****************************************************************************************************************')
    // app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log('error connecting to db :', err)
  });

console.log('\n \n \n')
console.log('=======================================================================================================================')
console.log(`==${new Date()} ======= SERVER IS RUNNING ON PORT : ${5000} ===== `)
console.log('=======================================================================================================================')

// in case i want to change the defult mongod port (it's a command, run it in cmd)
// mongo --port = 27018

module.exports = app;
