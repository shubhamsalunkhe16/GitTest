import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const AutocompleteMUI = () => {
  const array = top100Films.map((film) => {
    return film.label;
  });

  console.log("array ", array);

  return (
    <div>
      <Autocomplete
        multiple
        id="combo-box-demo"
        loading={true}
        options={array}
        popupIcon={<ExpandCircleDownIcon />}
        sx={{ width: 300, borderRadius: "30px" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Movie"
            variant="outlined"
            sx={{ borderRadius: "50px" }}
          />
        )}
      />
    </div>
  );
};

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

export default AutocompleteMUI;
