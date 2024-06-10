import React from 'react';

const DateFilter = ({ onDateChange }) => {
  return (
    <div className="date-filter">
      <label>Date Filter</label>
      <input type="date" onChange={(e) => onDateChange(e.target.value)} />
    </div>
  );
};

export default DateFilter;
