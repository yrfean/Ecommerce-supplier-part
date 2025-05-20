import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const Mock = () => {
  return (
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label=""
        value={""}
        onChange={(newValue) => setValue(newValue?.toISOString().slice(0, 10))}
        enableAccessibleFieldDOMStructure={false}
        slots={{ textField: TextField }}
        slotProps={{
          textField: {
            sx: {
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#47BA82",
                },
              },
            },
          },
          day: {
            sx: {
              "&.Mui-selected": {
                backgroundColor: "#47BA82 !important", // force the color
                color: "white",
              },
              "&.Mui-selected.Mui-focusVisible": {
                backgroundColor: "#47BA82 !important", // focused selected
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#47BA82 !important", // hover on selected
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default Mock;
