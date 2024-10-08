const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const express = require('express');
const connectDB = require('./config/db');
const progressReportRoutes = require('./routes/progressReport');
const analyticsRoutes = require('./routes/analytics');
const parentRoutes = require('./routes/parent');

app.use(express.json());

dotenv.config();
connectDB();

const app = express();

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

// Course routes
app.use('/api/courses', require('./routes/course'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
