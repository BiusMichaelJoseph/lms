import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Analytics = ({ studentId }) => {
  const [averageGrade, setAverageGrade] = useState(null);
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get(`/api/analytics/student/${studentId}`);
        setAverageGrade(res.data.averageGrade);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };

    fetchAnalytics();
  }, [studentId]);

  // Dummy performance data for trend chart (can be replaced with actual API data)
  const chartData = {
    labels: ['Term 1', 'Term 2', 'Term 3'],
    datasets: [
      {
        label: 'Performance Trend',
        data: performanceData.length ? performanceData : [3.0, 3.5, 3.8], // Example data
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="analytics">
      <h3>Performance Analytics</h3>
      <p><strong>Average Grade:</strong> {averageGrade ? averageGrade : 'N/A'}</p>

      <div className="performance-trend">
        <h4>Performance Trend</h4>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Analytics;
