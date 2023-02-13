import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import SimpleConfirmDialog from "../Components/UserInterface/SimpleConfirmDialog";
import SimpleTextInputDialog from "../Components/UserInterface/SimpleTextInputDialog";

export default function FullWidthPage() {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [textInputDialogOpen, setTextInputDialogOpen] = useState(false);
  return (
    <Box>
      <Button variant="contained" onClick={() => setConfirmDialogOpen(true)}>
        Open dialog
      </Button>
      <Button variant="contained" onClick={() => setTextInputDialogOpen(true)}>
        Open text input dialog
      </Button>
      <SimpleConfirmDialog
        open={confirmDialogOpen}
        title="Hello world"
        content="Hello world"
        handleConfirm={() => alert("You clicked confirm")}
        handleClose={() => setConfirmDialogOpen(false)}
      />
      <SimpleTextInputDialog
        open={textInputDialogOpen}
        title="Hello world"
        content="Hello world"
        handleClose={() => setTextInputDialogOpen(false)}
        handleTextInput={(value) => alert(value)}
      />
    </Box>
  );
}
