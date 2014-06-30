// app = express() in server.js
// This module.exports syntax means that when
// this file is called in the server.js file
// it will run the function that is defined below
//
// this function takes app, which is the express app,
// and does the routing/database communication
//
// I think
// - David


module.exports = function(app) {


	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
