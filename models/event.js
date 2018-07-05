const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: {type: String, required: true},
  date: {type: String, required: true},
  time: {type: String, required: true},
  location: {type: String, required: true},
  description: {type: String, required: true},
  userId: {type: String, required: true}
}, {
  timestamps: true
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
