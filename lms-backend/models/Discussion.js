const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  question: { type: String, required: true },
  answer: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Discussion', discussionSchema);
