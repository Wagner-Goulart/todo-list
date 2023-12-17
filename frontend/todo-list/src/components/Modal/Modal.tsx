import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import Typography from "@mui/material/Typography";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eaf1e9",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 12,
  },
});

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" onClick={handleClickOpen} style={{backgroundColor: 'green'}}>
          Adicionar uma tarefa
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Título
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseSharpIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              Conteúdo
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} style={{backgroundColor: 'green'}}>
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
