const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  classroomUrl: { type: String },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to User (teacher)
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],  // Students enrolled in the course
  content: [
    {
      moduleTitle: { type: String, required: true },
      lessons: [
        {
            lessonTitle: { type: String, required: true },
            lessonContent: { type: String, required: true },  // Text content
            videoUrl: { type: String },  // URL for videos
            attachedFiles: [{ type: String }]  // URLs or paths for files
          }
      ]
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
