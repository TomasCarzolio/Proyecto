var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var data = require('./database/models')

// db.sequelize.sync({force: true});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products')

var app = express();

app.use(session({
  secret: 'Neymarsito',
  resave: false,
  saveUninitialized: true
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Cookie middleware
app.use(function(req, res, next) {
  if (!req.session.usuario && req.cookies.usuarioId) {
    // Find the user
    data.Usuario.findByPk(req.cookies.usuarioId)
    .then(function(data) {
      // Act as login
      req.session.usuario = data;
      next();
    })
  } else {
    next();
  }
})

// Session middleware
app.use(function(req, res, next) {
  res.locals.me = req.session.usuario;
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
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
