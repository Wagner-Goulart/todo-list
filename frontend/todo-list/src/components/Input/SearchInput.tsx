import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function SearchInput() {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Digite uma tarefa"
        variant="filled"
        margin="dense"
        fullWidth
      />
    </Box>
  );
}

export { SearchInput };
