var mongoose = require('mongoose');
<<<<<<< HEAD

var volunteerSchema = new mongoose.Schema({
=======
var JobSchema = new mongoose.Schema({
  name: String,
  description: String,
  numSlots: Number
});
var VolunteerSchema = new mongoose.Schema({
>>>>>>> upstream/master
  name: String,
  email: String,
  eventName: String,
});

var jobSchema = new mongoose.Schema({
  name: String,
  description: String,
  numSlots: Number,
  volunteers: [volunteerSchema]
});

exports.FormSchema = new mongoose.Schema({
  eventName: String,
<<<<<<< HEAD
  jobList: [jobSchema],
=======
  jobList: [JobSchema],
  volunteers: [VolunteerSchema]
>>>>>>> upstream/master
});
