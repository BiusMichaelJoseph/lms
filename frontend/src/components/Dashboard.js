import React, { useState } from 'react';
import { Calendar, BarChart2, BookOpen, Monitor, LogOut } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './dashboard.css';

const activityData = [
  { name: 'Jan', value1: 40, value2: 24 },
  { name: 'Feb', value1: 30, value2: 13 },
  { name: 'Mar', value1: 20, value2: 98 },
  { name: 'Apr', value1: 27, value2: 39 },
  { name: 'May', value1: 18, value2: 48 },
  { name: 'Jun', value1: 23, value2: 38 },
  { name: 'Jul', value1: 34, value2: 43 },
  { name: 'Aug', value1: 34, value2: 77 },
  { name: 'Sep', value1: 34, value2: 43 },
  { name: 'Oct', value1: 34, value2: 77 },
  { name: 'Nov', value1: 34, value2: 43 },
  { name: 'Dec', value1: 34, value2: 77 },
];

const LMSDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-icon"></div>
        <button
          className={`sidebar-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <BarChart2 className="icon" />
        </button>
        <button
          className={`sidebar-btn ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          <Calendar className="icon" />
        </button>
        <button
          className={`sidebar-btn ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          <BookOpen className="icon" />
        </button>
        <button
          className={`sidebar-btn ${activeTab === 'monitor' ? 'active' : ''}`}
          onClick={() => setActiveTab('monitor')}
        >
          <Monitor className="icon" />
        </button>
        <button className="sidebar-btn">
          <LogOut className="icon" />
        </button>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="header">
          <h1 className="header-title">Dashboard</h1>
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        {/* Banner */}
        <div className="banner">
          <h2 className="banner-title">Good Morning Ghaum</h2>
          <p>Check your daily task & Schedules</p>
        </div>

        {/* Activity Chart */}
        <div className="chart-container">
          <h3 className="section-title">Activities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value1" fill="#8884d8" />
              <Bar dataKey="value2" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Today's Tasks */}
        <div className="task-container">
          <h3 className="section-title">Today's Tasks</h3>
          <table className="task-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Stage</th>
                <th>Assigned</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Development</td>
                <td>Design</td>
                <td>John Doe</td>
                <td>2024-09-23</td>
                <td><span className="status-active">Active</span></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="right-sidebar">
        <div className="right-sidebar-section">
          <h3 className="right-sidebar-title">September 2024</h3>
          {/* Add a calendar component here */}
        </div>
        <div className="right-sidebar-section">
          <h4 className="right-sidebar-subtitle">Open Projects</h4>
          <p className="right-sidebar-value">500</p>
        </div>
        <div className="right-sidebar-section">
          <h4 className="right-sidebar-subtitle">Automatically Generated</h4>
          <p className="right-sidebar-value">3502</p>
        </div>
        <div className="right-sidebar-section">
          <h4 className="right-sidebar-subtitle">Earned this month</h4>
          <p className="right-sidebar-value">$15000</p>
        </div>
      </div>
    </div>
  );
};

export default LMSDashboard;
