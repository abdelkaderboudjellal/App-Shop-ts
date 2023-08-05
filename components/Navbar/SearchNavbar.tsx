import * as React from "react";
import { useState } from "react";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { IconButton } from "@mui/material";
import { ProductsContexts } from "../context/productscontext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid  #e0e0e0",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const SearchNavbar = () => {
  const { setChipData, chipData, setSearchName } =
    React.useContext(ProductsContexts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const handlClick = () => {
    if (searchTerm.trim().length != 0) {
      setSearchName(searchTerm);
    }
    if (
      chipData.find((chip) => chip.label === searchTerm) ||
      searchTerm.trim().length === 0
    ) {
      return chipData;
    } else {
      return setChipData([
        ...chipData,
        {
          key:
            chipData.length === 0 ? 1 : chipData[chipData.length - 1].key + 1,
          label: searchTerm,
        },
      ]);
    }
  };

  return (
    <Search sx={{ display: { xs: "none", md: "block" } }}>
      <SearchIconWrapper>
        <IconButton onClick={handlClick} color="primary" sx={{ zIndex: 1300 }}>
          <SearchIcon />
        </IconButton>
      </SearchIconWrapper>
      <StyledInputBase
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchNavbar;
