// backend/routes/timetable.js
const express = require('express');
const { createTimetable, getTimetable } = require('../controllers/timetableController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

const router = express.Router();

// Create a new timetable (teacher only)
router.post('/create', auth, role(['teacher']), createTimetable);

// Get a student's timetable (student only)
router.get('/student', auth, role(['student']), getTimetable);

module.exports = router;
