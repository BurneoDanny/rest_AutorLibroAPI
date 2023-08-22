/* IMPORTS TIPO COMMONJS MODULE */
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var express = require('express');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var autorRouter = require('./routes/rest_autor')
var autor_libroRouter = require('./routes/rest_autor_libro')
var libroRouter = require('./routes/rest_libro')

var app = express();
app.use(cors()); //middleware cors

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json()); // para que el req value pueda entender objetos json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rest/autor', autorRouter);
app.use('/rest/libro', libroRouter);
app.use('/rest/autor_libro', autor_libroRouter);

// SI VISITA UN URL NO DEFINIDO
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
