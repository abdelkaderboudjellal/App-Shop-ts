import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { ProductsContexts } from "../context/productscontext";
import { ChipData } from "@/types/types";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const { setChipData, chipData, setSearchName } =
    React.useContext(ProductsContexts);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
  const handleClick = (chip: ChipData) => () => {
    if (chip.label.trim().length > 0) {
      setSearchName(chip.label);
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              sx={{ backgroundColor: "#e0e0e0" }}
              label={data.label}
              onDelete={data.label === "React" ? undefined : handleDelete(data)}
              onClick={handleClick(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
