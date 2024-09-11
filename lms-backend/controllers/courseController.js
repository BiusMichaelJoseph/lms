const Course = require('../models/Course');
const User = require('../models/User');

// Create a new course (Teacher)
exports.createCourse = async (req, res) => {
  const { title, description, content } = req.body;
  try {
    // Check if the user is a teacher
    const teacher = await User.findById(req.user.id);
    if (teacher.role !== 'teacher') {
      return res.status(401).json({ msg: 'Only teachers can create courses' });
    }

    const newCourse = new Course({
      title,
      description,
      teacher: req.user.id,
      content
    });

    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Enroll a student in a course
exports.enrollStudent = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    const student = await User.findById(req.user.id);

    if (!course || student.role !== 'student') {
      return res.status(400).json({ msg: 'Course or student not found' });
    }

    if (course.students.includes(req.user.id)) {
      return res.status(400).json({ msg: 'You are already enrolled in this course' });
    }

    course.students.push(req.user.id);
    await course.save();

    res.json({ msg: 'Enrolled successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId).populate('teacher', 'name').populate('students', 'name');
    if (!course) {
      return res.status(404).json({ msg: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
  
    try {
      const courses = await Course.find()
        .populate('teacher', 'name')
        .skip((page - 1) * limit)
        .limit(limit);
  
      const total = await Course.countDocuments();
      res.json({
        courses,
        currentPage: page,
        totalPages: Math.ceil(total / limit)
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

exports.getAllCourses = async (req, res) => {
    const { search } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
  
    try {
      const query = search
        ? { $or: [{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }] }
        : {};
  
      const courses = await Course.find(query)
        .populate('teacher', 'name')
        .skip((page - 1) * limit)
        .limit(limit);
  
      const total = await Course.countDocuments(query);
      res.json({
        courses,
        currentPage: page,
        totalPages: Math.ceil(total / limit)
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  