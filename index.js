'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso-mongo', {useMongoClient: true})
		.then(() => {
			console.log('Se conecto a mongo');

			app.listen(port, () => {
				console.log("Server running on port: 3000!");
			});
		})
		.catch(err => console.log(err));





