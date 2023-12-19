import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function DateInput() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker sx={{ marginBottom: 2 }} />
      </LocalizationProvider>
  );
}

export { DateInput };
