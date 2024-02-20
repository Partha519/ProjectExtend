import React, { useState } from 'react';
import '../styles/SelectMonth.css';


const SelectMonth = ({ onMonthChange }) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [selectedMonth, setSelectedMonth] = useState('March');

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    onMonthChange(e.target.value);
  }

  return (
    <div className="select-month-container">
      <select value={selectedMonth} onChange={handleMonthChange}>
        {months.map(month => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectMonth;
