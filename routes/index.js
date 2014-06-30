

module.exports = function(app) {


	// server routes 
        app.get('/forms', function(req, rest) {
          Form.find
        });

	// frontend routes
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
