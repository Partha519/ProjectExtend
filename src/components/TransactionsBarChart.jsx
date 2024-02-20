import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/TransactionsBarChart.css';

const TransactionsBarChart = ({ selectedMonth }) => {
  const [barChartData, setBarChartData] = useState({});

  useEffect(() => {
    fetchBarChartData();
  }, [selectedMonth]);

  const fetchBarChartData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/bar-chart?month=${selectedMonth}`);
      setBarChartData(response.data);
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
    }
  };

  const maxCount = Math.max(...Object.values(barChartData));

  return (
    <div className="bar-chart-container">
      <h2>Bar Chart Stats - {selectedMonth}</h2>
      <div className="bars">
        {Object.entries(barChartData).map(([range, count]) => (
          <div key={range} className="bar" style={{ height: `${(count / maxCount) * 300}px` }}>
            <span className="bar-label">{count}</span>
          </div>
        ))}
      </div>
      <div className="x-axis">
        {Object.keys(barChartData).map(range => (
          <span key={range}>{range}</span>
        ))}
      </div>
    </div>
  );
}

export default TransactionsBarChart;
