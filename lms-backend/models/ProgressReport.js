const mongoose = require('mongoose');

const progressReportSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  grades: { type: String, required: true },  // e.g., A, B, C, etc.
  comments: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProgressReport', progressReportSchema);
