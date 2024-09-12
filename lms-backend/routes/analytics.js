const express = require('express');
const { getStudentAnalytics } = require('../controllers/analyticsController');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');
const router = express.Router();

// Parents/Guardians view student performance analytics
router.get('/student/:studentId', auth, role(['parent']), getStudentAnalytics);

module.exports = router;
