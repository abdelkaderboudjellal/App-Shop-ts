import React from "react";
import {
  Container,
  InputAdornment,
  TextField,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { ProductsContexts } from "../context/productscontext";

const Searchs = () => {
  const { setChipData, chipData, setSearchName, searchTerm, setSearchTerm } =
    React.useContext(ProductsContexts);

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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TextField
        id="search"
        type="search"
        label="Your Search Here "
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 1 }}
        InputProps={{
          sx: { borderRadius: 25 },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handlClick}
                color="primary"
                aria-label="add an alarm"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default Searchs;
