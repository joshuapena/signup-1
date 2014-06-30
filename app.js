// modules =================================================
var express = require('express');
var app     = express();
var mongoose= require('mongoose');

// configuration ===========================================
	
// config files, returns an object { url: 'mongodb url' }
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url);

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 
	app.use(express.logger('dev')); 	
	app.use(express.bodyParser()); 	
	app.use(express.methodOverride());		
});

// routes ==================================================
require('./routes/index')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); // shoutout to the user
exports = module.exports = app; 	// expose app
