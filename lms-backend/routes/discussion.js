const express = require('express');
const { askQuestion, answerQuestion } = require('../controllers/discussionController');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');
const router = express.Router();

// Students can ask questions
router.post('/:courseId', auth, role(['student']), askQuestion);

// Teachers can answer questions
router.put('/:discussionId', auth, role(['teacher']), answerQuestion);

module.exports = router;
