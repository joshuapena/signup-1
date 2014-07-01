var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  name: String,
  description: String,
  numSlots: Number
});
var VolunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  eventName: String,
});

exports.FormSchema = new mongoose.Schema({
  eventName: String,
  jobs: [JobSchema],
  volunteers: [VolunteerSchema]
});
