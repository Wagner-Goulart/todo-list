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
            style={{backgroundColor: "#f1f1f1", borderRadius: 4}}
            fullWidth
            sx={{marginBottom:2}}
          />
    </Box>
  );
}

export { SearchInput };
