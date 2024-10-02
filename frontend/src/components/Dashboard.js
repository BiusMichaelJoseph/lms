import React, { useState } from 'react';
import { Home, Book, Calendar, MessageSquare, FileText, Settings } from 'lucide-react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navigation = [
    { name: 'Home', icon: Home, tab: 'home' },
    { name: 'Courses', icon: Book, tab: 'courses' },
    { name: 'Calendar', icon: Calendar, tab: 'calendar' },
    { name: 'Inbox', icon: MessageSquare, tab: 'inbox' },
    { name: 'Files', icon: FileText, tab: 'files' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <h2 className="content-title">Welcome to Your Dashboard</h2>;
      case 'courses':
        return <h2 className="content-title">Your Courses</h2>;
      case 'calendar':
        return <h2 className="content-title">Calendar</h2>;
      case 'inbox':
        return <h2 className="content-title">Inbox</h2>;
      case 'files':
        return <h2 className="content-title">Files</h2>;
      default:
        return <h2 className="content-title">Welcome to Your Dashboard</h2>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="dashboard-title">LMS Dashboard</h1>
        </div>
        <nav className="nav-menu">
          {navigation.map((item) => (
            <a
              key={item.name}
              onClick={() => setActiveTab(item.tab)}
              className={`nav-item ${activeTab === item.tab ? 'nav-item-active' : ''}`}
            >
              <item.icon className="nav-icon" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="main-content">
        <header className="header">
          <h2 className="header-title">Dashboard</h2>
          <div className="user-section">
            <button className="settings-btn">
              <Settings className="settings-icon" />
            </button>
            <img
              className="user-avatar"
              src="https://via.placeholder.com/150"
              alt="User avatar"
            />
          </div>
        </header>

        <main className="content-area">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
