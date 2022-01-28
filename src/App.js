import React from "react";
import AutocompleteMUI from "./Components/AutocompleteMUI";
import ButtonMUI from "./Components/ButtonMUI";
import Stack from "@mui/material/Stack";
import ButtonGroupMUI from "./Components/ButtonGroupMUI";

export default function App() {
  return (
    <>
      <Stack direction="column" spacing={2}>
        <AutocompleteMUI />
        <ButtonMUI />
        <ButtonGroupMUI />
      </Stack>
    </>
  );
}
