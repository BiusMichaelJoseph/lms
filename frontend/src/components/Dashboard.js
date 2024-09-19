import React from 'react';
import { Book, Users, Calendar, Settings } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">LMS Dashboard</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
            <Book className="inline-block mr-2" size={20} />
            Courses
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
            <Users className="inline-block mr-2" size={20} />
            Students
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
            <Calendar className="inline-block mr-2" size={20} />
            Schedule
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
            <Settings className="inline-block mr-2" size={20} />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="bg-white shadow-sm mb-8 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome to Your LMS Dashboard</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Recent Courses</h3>
            <ul className="list-disc list-inside">
              <li>Introduction to React</li>
              <li>Advanced CSS Techniques</li>
              <li>Web Development Fundamentals</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Upcoming Assignments</h3>
            <ul className="list-disc list-inside">
              <li>React Project Due: Sept 25</li>
              <li>CSS Layout Challenge: Oct 2</li>
              <li>JavaScript Quiz: Oct 10</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Latest Announcements</h3>
            <p>New course on "Mobile App Development" starting next month. Enroll now!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;