const ProgressReport = require('../models/ProgressReport');

// Get performance analytics for a student (Parent/Guardian action)
exports.getStudentAnalytics = async (req, res) => {
  const { studentId } = req.params;

  try {
    const reports = await ProgressReport.find({ student: studentId });
    let totalGrades = 0;
    reports.forEach(report => {
      totalGrades += gradeToPoint(report.grades);  // Convert grades to points (e.g., A=4, B=3)
    });
    const averageGrade = totalGrades / reports.length;
    res.json({ averageGrade });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Convert letter grade to point for calculations
const gradeToPoint = (grade) => {
  switch (grade) {
    case 'A': return 4;
    case 'B': return 3;
    case 'C': return 2;
    case 'D': return 1;
    default: return 0;
  }
};
