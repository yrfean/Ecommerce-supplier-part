import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";

const Calender = ({ setValue }) => {
  const [value, setHereValue] = React.useState();
  return (
    <div className="h-[20px]">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label=""
          value={value}
          onChange={(newValue) => {
            setValue(format(newValue, "yyyy-MM-dd"));
            setHereValue(newValue);
          }}
          enableAccessibleFieldDOMStructure={false}
          slots={{ textField: TextField }}
          slotProps={{
            textField: {
              sx: {
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  padding: 0,
                  borderRadius: "8px",
                  backgroundColor: "White",

                  // Fix icon position
                  "& .MuiInputAdornment-root": {
                    marginRight: "12px",
                  },

                  "& input": {
                    padding: "10px 14px",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#47BA82",
                  },
                },
              },
            },
            day: {
              sx: {
                "&.Mui-selected": {
                  backgroundColor: "#47BA82 !important", 
                  color: "white",
                },
                "&.Mui-selected.Mui-focusVisible": {
                  backgroundColor: "#47BA82 !important", 
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#47BA82 !important", 
                },
              },
            },
            yearButton: {
              sx: {
                "&.Mui-selected": {
                  backgroundColor: "#47BA82 !important",
                  color: "white",
                },
                "&.Mui-selected.Mui-focusVisible": {
                  backgroundColor: "#47BA82 !important", 
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#47BA82 !important", 
                },
              },
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
