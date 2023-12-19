import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

function SelectInput() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
      <Box sx={{ minWidth: 120, width:300}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Usuário</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Wagner</MenuItem>
            <MenuItem value={20}>Liandra</MenuItem>
            <MenuItem value={30}>Natasha</MenuItem>
          </Select>
        </FormControl>
      </Box>
  );
}

export { SelectInput };
