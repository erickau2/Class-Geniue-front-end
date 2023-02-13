import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

interface DialogProps {
  open: boolean;
  title: string;
  content: string;
  type?: string;
  defaultValue?: string;
  handleTextInput(value: string): any;
  handleClose(): any;
}

export default function SimpleTextInputDialog(props: DialogProps) {
  const [textValue, setTextValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  const handleConfirm = () => {
    props.handleTextInput(textValue);
    props.handleClose();
  };
  useEffect(() => {
    setTextValue(props.defaultValue || "");
  }, [props.defaultValue, props.open]);
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.content}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          type={props.type || "text"}
          value={textValue}
          onChange={handleInputChange}
          fullWidth
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              handleConfirm();
            }
          }}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}
