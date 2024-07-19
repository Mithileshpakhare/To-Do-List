import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

function DatePickerComponent({ initialDate, onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  useEffect(() => {
    setSelectedDate(initialDate);
  }, [initialDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Notify the parent component about the date change
  };

  return (
    <div>
      <DatePickerComponent
      initialDate={todo.date} // Pass your initial date here
      onDateChange={handleDateTimeChange} // Pass your date change handler function here
    />
    </div>
  );
}

export default DatePickerComponent;