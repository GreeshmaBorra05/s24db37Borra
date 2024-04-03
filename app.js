var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var groceriesRouter = require('./routes/groceries'); //groceries endpoint added
var gridRouter = require('./routes/grid'); //grid endpoint added
var pickRouter = require('./routes/pick');//pick endpoint added
var groceries = require("./models/groceries");
//const groceries = require('./models/groceries');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/groceries', groceriesRouter); 
app.use('/grid', gridRouter); //grid endpoint added
app.use('/pick', pickRouter); //pick endpoint added
app.use('/resource',resourceRouter);

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
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await groceries.deleteMany();
let instance1 = new
groceries({item_type:"spices", item_name:'chilli powder',
item_price:15.4});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance2 = new
groceries({item_type:"sweets", item_name:'gulab jamun',
item_price:5.4});
instance2.save().then(doc=>{
console.log("second object saved")}
).catch(err=>{
console.error(err)
});
let instance3 = new
groceries({item_type:"vegetables", item_name:'tomato',
item_price:14});
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{
console.error(err)
});

}
let reseed = true;
if (reseed) {recreateDB();}





module.exports = app;
