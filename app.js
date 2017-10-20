'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//load routes
var frutaRouter = require('./routes/fruta');

//middleware body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//routes
app.use('/api', frutaRouter);


module.exports = app;