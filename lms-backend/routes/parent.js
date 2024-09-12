const express = require('express');
const User = require('../models/User');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');
const router = express.Router();

// Admin assigns parents to students
router.post('/assign-parent', auth, role(['admin']), async (req, res) => {
  const { parentId, studentId } = req.body;

  try {
    const parent = await User.findById(parentId);
    const student = await User.findById(studentId);

    if (!parent || !student) {
      return res.status(404).json({ msg: 'Parent or student not found' });
    }

    parent.students.push(studentId);
    await parent.save();
    res.json({ msg: 'Parent assigned to student successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to fetch the parent's children (students)
router.get('/children', auth, role(['parent']), async (req, res) => {
    const parentId = req.user.id; // Assuming the parent is authenticated
    try {
      const parent = await User.findById(parentId).populate('students', 'name');
      res.json(parent.students);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

module.exports = router;
