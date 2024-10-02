// backend/models/Timetable.js
const mongoose = require('mongoose');

const TimetableSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  videoLink: {
    type: String,  // Video conference link (e.g., Zoom or Google Meet)
    required: true,
  }
});

module.exports = mongoose.model('Timetable', TimetableSchema);
