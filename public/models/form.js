var mongoose = require('mongoose');
var Job = new mongoose.Schema({
  name: String,
  description: String,
  numSlots: Number
});
var Volunteer = new mongoose.Schema({
  name: String,
  email: String,
  eventName: String,
  job: String
});
var Form = new mongoose.Schema({
  eventName: String,
  jobList: [jobSchema],
  volunteers: [volunteerSchema]
});