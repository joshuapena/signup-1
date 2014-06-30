// modules =================================================
var express = require('express');
<<<<<<< HEAD
var app = express();
var routes = require('./routes');
var http = require('http');
var path = require('path');

var server = http.createServer(app);
var mongoose= require('mongoose');
=======
var app     = express();
var routes  = require('./routes');
>>>>>>> upstream/master

// config files, returns an object { url: 'mongodb url' }
<<<<<<< HEAD
var db = require('./config/db');
var port = process.env.PORT || 3000; // set our port
mongoose.connect(db.url);
=======

var port = process.env.PORT || 8080; // set our port
>>>>>>> upstream/master

app.configure(function() {
	app.set('views', path.join(__dirname, 'views'));
	app.use(express.favicon());

	app.use(express.static(__dirname + '/public')); 
	app.use(express.logger('dev')); 	
	app.use(express.bodyParser()); 	
	app.use(express.methodOverride());		
	app.use(app.router);
});

// routes ==================================================
app.get('/', routes.index);
<<<<<<< HEAD
app.get('/forms/:id', routes.form);
app.post('/newform', routes.create);
app.post('/apply', routes.apply);
=======
app.get('/forms/forms', routes.list);
app.get('/forms/form:id', routes.form);
app.post('/newform', routes.create);
>>>>>>> upstream/master

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); // shoutout to the user
exports = module.exports = app; 	// expose app
