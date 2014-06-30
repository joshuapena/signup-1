var mongoose = require('mongoose');

var volunteerSchema = new mongoose.Schema({
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
  jobList: [jobSchema],
});
