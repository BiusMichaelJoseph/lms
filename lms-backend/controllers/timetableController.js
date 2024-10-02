// backend/controllers/timetableController.js
const Timetable = require('../models/Timetable');
const User = require('../models/User');

// Create a new timetable entry
exports.createTimetable = async (req, res) => {
  const { subject, startTime, endTime, videoLink, students } = req.body;

  try {
    const timetable = new Timetable({
      subject,
      teacher: req.user.id,
      students,
      startTime,
      endTime,
      videoLink,
    });

    await timetable.save();
    res.json(timetable);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get timetable for a student
exports.getTimetable = async (req, res) => {
  try {
    const timetables = await Timetable.find({ students: req.user.id });
    res.json(timetables);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
