var mongoose= require('mongoose');
var db = require('./config/db');
var FormSchema = require('../public/models/Form.js').Form;
var Form = db.model('forms', FormSchema);

exports.list = function(req, res) {
  Form.find({}, 'eventName', function(error, forms) {
    res.json(forms);
  });
};

exports.form = function(req, res) {
  var formId = req.params.id;
  Form.findById(formId, '', function(err, form){
    if(form) {
      res.json(form);
    } else {
      res.json({error:true});
    }
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
};









