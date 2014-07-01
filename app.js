// modules =================================================
var express = require('express');
var app     = express();
var routes  = require('./routes');

// config files, returns an object { url: 'mongodb url' }
var port = process.env.PORT || 3000; // set our port

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 
	app.use(express.logger('dev')); 	
	app.use(express.bodyParser()); 	
	app.use(express.methodOverride());		
        app.use(app.router);
});

app.use(function(err, res, res, next) {
  if(!err) return next();
  console.log(err.stack);
  res.json({error: true});
});

// routes ==================================================
app.get('/', routes.index);
app.get('/forms/forms', routes.list);
app.get('/form/:id', routes.form);
app.post('/forms', routes.create);

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); // shoutout to the user
exports = module.exports = app; 	// expose app
