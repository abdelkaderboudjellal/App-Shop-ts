import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { Search, West } from "@mui/icons-material";

import Searchs from "./Searchs";

/* import CategorySelect from "../Product/CategorySelect"; */
import ChipsArray from "./ChipsArraySearch";
/* import SlidrerRange from "../Slider/SlidrerRange"; */
import { ProductsContexts } from "../context/productscontext";
import SlidrerRange from "../slider/SlidrerRange";
import CategorySelect from "../Products/CategorySelect";
type Props = {
  anchor: "left" | "right" | "top" | "bottom";
};
const SearchBar = ({ anchor }: Props) => {
  const theme = useTheme();
  const {
    dataSelect,

    toggleDrawer,

    result,
    setChipData,
    chipData,
    setSearchName,
    searchTerm,
    setSearchTerm,
  } = useContext(ProductsContexts);
  const countProduct = dataSelect.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

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
    <>
      <Box sx={{ height: { sx: "100vh", md: "50vw" } }}>
        <Stack
          direction={"row"}
          sx={{
            px: 1,
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <IconButton
            aria-label="delete"
            size="medium"
            onClick={toggleDrawer(anchor, false)}
          >
            <West fontSize="inherit" color="primary" />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              width: "full",
              fontWeight: "600",
              color: "black",
              px: 4,
            }}
          >
            Search
          </Typography>
        </Stack>
        <Box
          sx={{
            borderBottom: "2px solid",
            borderColor: theme.palette.primary.main,
            boxShadow: 3,
            mb: 4,
          }}
        />
        <Card sx={{ minWidth: 275, border: "none!Important" }}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{ fontSize: 20, letterSpacing: ".2rem", fontWeight: 700 }}
                color="primary"
                gutterBottom
              >
                Search in Cyber Store:
              </Typography>
            </Stack>

            <SlidrerRange />

            <Searchs />
            <CategorySelect options={result} />
            <Stack
              direction="column"
              justifyContent="space-between"
              sx={{ mt: 4 }}
            >
              <Typography
                sx={{ fontSize: 20, textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                Recent research
              </Typography>
              <ChipsArray />
            </Stack>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="small"
              onClick={handlClick}
              sx={{
                borderRadius: 20,
                height: 40,
                textTransform: "uppercase",
                letterSpacing: ".3rem",
              }}
              startIcon={<Search />}
            >
              Search
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default SearchBar;
