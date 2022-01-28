import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const ButtonMUI = () => {
  return (
    <div>
      <Stack direction="row" spacing="2">
        <Button
          variant="outlined"
          size="large"
          endIcon={<SendIcon />}
          onClick={() => {
            alert("Clicked!!!");
          }}
        >
          Small
        </Button>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default ButtonMUI;
