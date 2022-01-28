import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Stack, Box } from "@mui/material";

const ButtonGroupMUI = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#e5e0d9",
          m: "15",
        }}
      >
        <Stack direction="row" spacing={2}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
          </ButtonGroup>

          <ButtonGroup variant="contained" aria-label="text button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </div>
  );
};

export default ButtonGroupMUI;
