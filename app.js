// modules =================================================
var express = require('express');
var app     = express();
var routes  = require('./routes');

// configuration ===========================================
	
// config files, returns an object { url: 'mongodb url' }

var port = process.env.PORT || 8080; // set our port

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 
	app.use(express.logger('dev')); 	
	app.use(express.bodyParser()); 	
	app.use(express.methodOverride());		
});

// routes ==================================================
app.get('/', routes.index);
app.get('/forms/forms', routes.list);
app.get('/forms/form:id', routes.form);
app.post('/newform', routes.create);

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); // shoutout to the user
exports = module.exports = app; 	// expose app
