import { Home } from "./pages/Home";
import { NavBar } from "./pages/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eaf1e9",
    },
    secondary: {
      main: "#388e3c",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
