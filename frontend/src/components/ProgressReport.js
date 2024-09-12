import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgressReport = ({ studentId }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get(`/api/progress-reports/student/${studentId}`);
        setReports(res.data);
      } catch (error) {
        console.error('Error fetching progress reports:', error);
      }
    };

    fetchReports();
  }, [studentId]);

  return (
    <div className="progress-reports">
      <h3>Progress Reports</h3>
      {reports.length > 0 ? (
        <ul>
          {reports.map((report) => (
            <li key={report._id}>
              <p><strong>Course:</strong> {report.course.name}</p>
              <p><strong>Grade:</strong> {report.grades}</p>
              <p><strong>Comments:</strong> {report.comments}</p>
              <p><strong>Date:</strong> {new Date(report.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No progress reports available.</p>
      )}
    </div>
  );
};

export default ProgressReport;
