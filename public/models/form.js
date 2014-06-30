var mongoose = require('mongoose');

var volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  eventName: String,
});
<<<<<<< HEAD

var jobSchema = new mongoose.Schema({
  name: String,
  description: String,
  numSlots: Number
  volunteers: [volunteerSchema]
});

exports.Form = new mongoose.Schema({
=======
exports.FormSchema = new mongoose.Schema({
>>>>>>> upstream/master
  eventName: String,
  jobList: [jobSchema],
});
