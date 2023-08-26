"use client";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { FilterAlt } from "@mui/icons-material";

import Searchs from "./Searchs";

import ChipsArray from "./ChipsArraySearch";

import { ProductsContexts } from "../context/productscontext";
import SlidrerRange from "../slider/SlidrerRange";
import CategorySelect from "../Products/CategorySelect";

function Filter() {
  const theme = useTheme();
  const {
    dataSelect,

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
    <Box
      sx={{
        width: "30%",
        minHeight: "70vh",
        display: { xs: "none", md: "block" },
        minWidth: 260,
        border: "1px  solid #9e9e9e",
        m: 1,
        p: 1,
        my: 4,
        borderRadius: "5px",
      }}
    >
      <Card sx={{ minWidth: 250, border: "none!Important" }}>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            sx={{ borderBottom: "1px solid  #9e9e9e", pb: 2 }}
          >
            <FilterAlt />
            <Typography variant="subtitle1" fontWeight={700}>
              Filter Product
            </Typography>
          </Stack>
          <Stack spacing={4} paddingY={8}>
            <Searchs />
            <CategorySelect options={result} />
            <SlidrerRange />
          </Stack>
          <Stack
            direction="column"
            justifyContent="space-between"
            sx={{ my: 2 }}
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
              width: "120px",
              mx: "auto",
            }}
            startIcon={<FilterAlt />}
          >
            Filter
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Filter;
