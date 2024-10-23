const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const progressReportRoutes = require('./routes/progressReport');
const analyticsRoutes = require('./routes/analytics');
const parentRoutes = require('./routes/parent');
const discussionRoutes = require('./routes/discussion');

const app = express();

app.use(express.json());

dotenv.config();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('LMS API Running');
});
app.use('/api/auth', require('./routes/auth'));
app.use('/api/progress-reports', progressReportRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/parent', parentRoutes);
app.use('/api/discussions', discussionRoutes); 
app.use('/api/courses', require('./routes/course'));
app.use('/api/timetable', require('./routes/timetable'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
