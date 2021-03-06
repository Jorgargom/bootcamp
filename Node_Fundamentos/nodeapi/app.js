var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

// Conectamos la base de datos
require("./lib/connectMongoose");
// Cargamos los modelos para que mongoose los conozca
require("./models/Agente");

var app = express();

// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.locals.title = "Nodeapi";

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//middleware de estáticos
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
  //console.log("peticion", req.method);
  //o respondemos o llamamos a next (obligatoriamente)
  //res.send("Hola Caracola");
  next();

  //podemos forzar el saltar los siguientes e ir al middleware de error directamente
  //next(new Error("se te ha olvidado poner el cif"));
});

/**
 * Middlewares de mi aplicación web
 */
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

/**
 * Middlewares de mi API
 */

app.use("/apiv1/agentes", require("./routes/apiv1/agentes"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  if (err.array) {
    //validation error
    err.status = 422;
    const errInfo = err.array({ onlyFirstError: true })[0];
    err.message = `Not valid - ${errInfo.msg}`;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
