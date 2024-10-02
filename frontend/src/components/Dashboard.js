import React, { useState } from 'react';
import { Calendar, BarChart2, BookOpen, Monitor, LogOut } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 bg-blue-900 flex flex-col items-center py-4">
        <div className="w-10 h-10 bg-white rounded-full mb-8"></div>
        <button className={`mb-4 p-2 rounded ${activeTab === 'dashboard' ? 'bg-blue-800' : ''}`} onClick={() => setActiveTab('dashboard')}>
          <BarChart2 className="text-white" />
        </button>
        <button className={`mb-4 p-2 rounded ${activeTab === 'calendar' ? 'bg-blue-800' : ''}`} onClick={() => setActiveTab('calendar')}>
          <Calendar className="text-white" />
        </button>
        <button className={`mb-4 p-2 rounded ${activeTab === 'courses' ? 'bg-blue-800' : ''}`} onClick={() => setActiveTab('courses')}>
          <BookOpen className="text-white" />
        </button>
        <button className={`mb-4 p-2 rounded ${activeTab === 'monitor' ? 'bg-blue-800' : ''}`} onClick={() => setActiveTab('monitor')}>
          <Monitor className="text-white" />
        </button>
        <button className="mt-auto p-2 rounded">
          <LogOut className="text-white" />
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <input type="text" placeholder="Search..." className="p-2 border rounded" />
        </div>

        {/* Banner */}
        <div className="bg-blue-900 text-white p-6 rounded-lg mb-8">
          <h2 className="text-xl mb-2">Good Morning Ghaum</h2>
          <p>Check your daily task & Schedules</p>
        </div>

        {/* Activity Chart */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-lg font-semibold mb-4">Activities</h3>
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
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Today's Tasks</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Department</th>
                <th className="text-left">Stage</th>
                <th className="text-left">Assigned</th>
                <th className="text-left">Date</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Development</td>
                <td>Design</td>
                <td>John Doe</td>
                <td>2024-09-23</td>
                <td><span className="bg-green-200 text-green-800 py-1 px-2 rounded">Active</span></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="w-64 bg-white p-4">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">September 2024</h3>
          {/* Add a calendar component here */}
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Open Projects</h4>
          <p className="text-2xl font-bold">500</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Automatically Generated</h4>
          <p className="text-2xl font-bold">3502</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Earned this month</h4>
          <p className="text-2xl font-bold">$15000</p>
        </div>
      </div>
    </div>
  );
};

export default LMSDashboard;