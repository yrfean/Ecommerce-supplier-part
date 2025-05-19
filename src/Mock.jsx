import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";


const Mock = () => {
  const [value, setValue] = useState();
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <DatePicker
    //     label="Pick a date"
    //     value={value}
    //     onChange={(newValue) => setValue(newValue)}
    //     renderInput={(params) => <TextField {...params} />}
    //   />
    // </LocalizationProvider>
    <div class="relative w-64 mt-10">
      <input
        type="text"
        id="name"
        placeholder=" "
        class="peer w-full px-3 pt-6 pb-2 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <label
        for="name"
        class="absolute left-1/2 top-1 text-gray-500 bg-white px-1 text-sm transform -translate-x-1/2 -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
      >
        Name and address wihr qkewfhjladb
      </label>
    </div>
  );
};

export default Mock;
