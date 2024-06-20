import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = () => {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
    // Handle date change logic here (e.g., filter data based on selected date)
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      placeholderText="Select date"
      className="p-2 border rounded"
    />
  );
};

export default DateFilter;
