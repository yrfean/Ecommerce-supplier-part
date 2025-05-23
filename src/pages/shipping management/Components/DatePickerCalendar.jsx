import React, { useState } from "react";
import { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePickerCalendar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log(new Date(date).toISOString().slice(0, 10));
  }, [date]);
  return (
    <div className="w-full h-full mt-7">
      <Calendar
        // style={{ width: "400px", height: "400px" }}
        className="custom-full-calendar"
        onChange={setDate}
        value={date}
        selectRange={false}
        calendarType="iso8601"
      />
    </div>
  );
};

export default DatePickerCalendar;
