const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apptSchema = new Schema({
  event_type: { type: String, required: true },
  event_date: { type: Date, default: Date.now },
  event_start: { type: Date},
  event_end: { type: Date},
  event_notes: { type: String, required: true },
});

const Appointment = mongoose.model("Appointment", apptSchema);

module.exports = Calendar;