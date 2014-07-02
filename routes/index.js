var mongoose= require('mongoose');
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
  var formId = req.params.formId;
  Form.findById(formId,'',{ lean: true }, function(err, form) {
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
      jobList: jobs,
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

exports.volunteer = function(req, res) {
  var id = req.params.formId,
      volunteer = JSON.parse(req.params.volunteer);
  Form.update({_id:id}, {$push: {"volunteers": volunteer}}, function(err, form){
    res.json(form);
  });
};

exports.formVolunteer = function(req, res) {
  var formId = req.params.formId;
  Form.findById(formId, '',{ lean: true }, function(err, form) {
    if(form) {
      res.json(form);
    } else {
      res.json({error:true});
    }
  });

  var body = req.body,
    volunteerObject = {
      name: body.name,
      email: body.email,
      eventName: body.eventName
    };
  var volunteer = new Volunteer(volunteerObject);
  volunteer.save(function(err, doc) {
    if(err || !doc) {
      throw 'Error';
    } else {
      res.json(doc);
    }
  });
};
