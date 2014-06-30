

module.exports = function(app) {


	// server routes 
        app.get('/forms', function(req, res) {
          Form.find({}, 'eventName', function(error, forms) {
            res.json(forms);
          });
        });

        app.get('/forms/form:id', function(req, res) {
          var formId = req.params.id;
          Form.findById(formId, '', function(err, form){
            if(form) {
              res.json(form);
            } else {
              res.json({error:true});
            }
            });
        });

        app.post('/newform', function(req, res) {
          var body = req.body,
            jobs = body.jobs.filter(function(t) {return t.name != '';}),
            formObj = {
              eventName: body.eventName,
              jobs: jobs,
              volunteers: [],
            };
          var form = new Form(formObj);
          form.save(function(err, doc) {
            if(err || !doc) {
              throw 'Error';
            } else {
              res.json(doc);
            }
          });
        });

	// frontend routes
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
