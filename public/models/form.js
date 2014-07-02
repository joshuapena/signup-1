var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  name: String,
  description: String,
  numSlots: Number
});
var VolunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  job: String,
});

exports.FormSchema = new mongoose.Schema({
  eventName: String,
  jobList: [JobSchema],
  volunteers: [VolunteerSchema]
});
