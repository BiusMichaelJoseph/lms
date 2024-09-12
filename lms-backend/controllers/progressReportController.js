const ProgressReport = require('../models/ProgressReport');
const User = require('../models/User');

// Add a progress report (Teacher action)
exports.addProgressReport = async (req, res) => {
  const { studentId, courseId, grades, comments } = req.body;

  try {
    const newReport = new ProgressReport({
      student: studentId,
      course: courseId,
      grades,
      comments
    });

    await newReport.save();
    res.json(newReport);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get progress reports for a student (Parent/Guardian action)
exports.getStudentReports = async (req, res) => {
  const { studentId } = req.params;

  try {
    const reports = await ProgressReport.find({ student: studentId }).populate('course', 'name');
    res.json(reports);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
