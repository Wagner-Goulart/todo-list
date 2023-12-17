import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#525252",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16
  },
});

function SearchInput() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
          <TextField
            id="outlined-basic"
            label="Digite uma tarefa"
            variant="filled"
            margin="dense"
            style={{backgroundColor: "#f1f1f1", borderRadius: 4}}
          />
      </ThemeProvider>
    </Box>
  );
}

export { SearchInput };
