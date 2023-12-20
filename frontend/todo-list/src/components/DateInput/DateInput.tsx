import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


function DateInput() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date de conclusão"
        sx={{ marginBottom: 2}}
        slotProps={{ textField: { color: "secondary", variant:"filled" } }}
        
      />
    </LocalizationProvider>
  );
}

export { DateInput };
