import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressReport from './ProgressReport';
import Analytics from './Analytics';

const ParentDashboard = () => {
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);

  useEffect(() => {
    // Fetch the parent's children (students)
    const fetchChildren = async () => {
      try {
        const res = await axios.get('/api/parent/children');
        setChildren(res.data);
      } catch (error) {
        console.error('Error fetching children:', error);
      }
    };

    fetchChildren();
  }, []);

  const handleSelectChild = (child) => {
    setSelectedChild(child);
  };

  return (
    <div className="parent-dashboard">
      <h2>Parent Dashboard</h2>
      <div className="child-list">
        <h3>Your Children</h3>
        <ul>
          {children.map((child) => (
            <li key={child._id} onClick={() => handleSelectChild(child)}>
              {child.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedChild && (
        <>
          <ProgressReport studentId={selectedChild._id} />
          <Analytics studentId={selectedChild._id} />
        </>
      )}
    </div>
  );
};

export default ParentDashboard;
