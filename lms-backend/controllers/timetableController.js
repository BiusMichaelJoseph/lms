const Timetable = require('../models/Timetable');
const Course = require('../models/Course');

exports.createTimetableEntry = async (req, res) => {
  const { courseId, date, startTime, endTime } = req.body;
  const teacherId = req.user.id;

  try {
    // Ensure no overlapping classes
    const existingEntry = await Timetable.findOne({ teacher: teacherId, date, startTime });
    if (existingEntry) {
      return res.status(400).json({ msg: 'Class overlaps with another scheduled class' });
    }

    const newEntry = new Timetable({
      teacher: teacherId,
      course: courseId,
      date,
      startTime,
      endTime
    });

    await newEntry.save();
    res.json(newEntry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
