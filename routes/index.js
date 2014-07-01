var mongoose= require('mongoose');
//var db = mongoose.createConnection('mongodb://<pinchDev>:<pinchDev>@ds061258.mongolab.com:61258/signup_dev_db');
var db = mongoose.createConnection('localhost', 'signup');
var FormSchema = require('../public/models/Form.js').FormSchema;
var Form = db.model('forms', FormSchema);

exports.index = function(req, res) {
  res.render('index');
};

exports.list = function(req, res) {
  Form.find({}, 'eventName', function(error, forms) {
    res.json(forms);
  });
};

exports.form = function(req, res) {
  var formId = req.params.id;
  Form.findById({},'',{ lean: true }, function(err, form) {
    if(form) {
      res.json(form);
    } else {
      res.json({error:true});
    };
  });
};

exports.create = function(req, res) {
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
};









