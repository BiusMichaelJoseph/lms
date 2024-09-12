const express = require('express');
const { addProgressReport, getStudentReports } = require('../controllers/progressReportController');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');
const router = express.Router();

// Teachers add reports
router.post('/add', auth, role(['teacher']), addProgressReport);

// Parents/Guardians view reports
router.get('/student/:studentId', auth, role(['parent']), getStudentReports);

module.exports = router;
