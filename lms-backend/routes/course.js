const express = require('express');
const { createCourse, enrollStudent, getCourseById, getAllCourses } = require('../controllers/courseController');
const auth = require('../middlewares/auth');
const router = express.Router();

// @route  POST /api/courses
// @desc   Create a course (only for teachers)
// @access Private
router.post('/', auth, createCourse);

// @route  POST /api/courses/:courseId/enroll
// @desc   Enroll a student in a course
// @access Private
router.post('/:courseId/enroll', auth, enrollStudent);

// @route  GET /api/courses/:courseId
// @desc   Get a course by ID
// @access Private
router.get('/:courseId', auth, getCourseById);

// @route  GET /api/courses
// @desc   Get all courses
// @access Public
router.get('/', getAllCourses);
// @route  PUT /api/courses/:courseId
// @desc   Update a course (only by the teacher who created it)
// @access Private
router.put('/:courseId', auth, async (req, res) => {
    const { title, description, content } = req.body;
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) return res.status(404).json({ msg: 'Course not found' });
  
      // Check if the user is the teacher of this course
      if (course.teacher.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized to update this course' });
      }
  
      // Update course fields
      course.title = title || course.title;
      course.description = description || course.description;
      course.content = content || course.content;
  
      await course.save();
      res.json(course);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

// @route  DELETE /api/courses/:courseId
// @desc   Delete a course (only by the teacher who created it)
// @access Private
router.delete('/:courseId', auth, async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) return res.status(404).json({ msg: 'Course not found' });
  
      // Check if the user is the teacher of this course
      if (course.teacher.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized to delete this course' });
      }
  
      await course.remove();
      res.json({ msg: 'Course removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

// Update a course
router.put('/:courseId', auth);

// Delete a course
router.delete('/:courseId', auth);

// Get all courses with pagination and search
router.get('/', getAllCourses);


module.exports = router;