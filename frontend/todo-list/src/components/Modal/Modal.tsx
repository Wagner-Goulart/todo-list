import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useState } from "react";
import { SearchInput } from "../Input/SearchInput";
import { DateInput } from "../DateInput/DateInput";
import { SelectInput } from "../SelectInput/SelectInput";

function Modal() {
const [open, setOpen] = useState(false)

const handleClick = ()=>{
  setOpen(!open)
}

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        style={{ backgroundColor: "green" }}
      >
        Adicionar uma tarefa
      </Button>

      <Dialog
        onClose={handleClick}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle id="customized-dialog-title">Adicionar tarefa</DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClick}
          sx={{
            position: "absolute",
            right: 8,
            top: 10,
          }}
        >
          <CloseSharpIcon />
        </IconButton>

        <DialogContent dividers>
          <SearchInput />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DateInput />
            <SelectInput />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClick}
            style={{ backgroundColor: "green" }}
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export { Modal };
