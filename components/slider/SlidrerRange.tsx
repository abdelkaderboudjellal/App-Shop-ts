import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Stack, TextField, Typography } from "@mui/material";
import { ProductsContexts } from "../context/productscontext";


function valuetext(value: number) {
  return `"$${value}"`;
}

export default function SlidrerRange() {
  const { valueSearch, setValueSearch } = React.useContext(ProductsContexts);

  const handleChange = (event:any, newValue:any) => {
    setValueSearch(newValue);
  };
  const handleChangeMax = (event:any) => {
    if (event.target.value > valueSearch[0] && event.target.value < 2001) {
      setValueSearch([valueSearch[0], (valueSearch[1] = event.target.value)]);
    }
  };
  const handleChangeMin = (event:any) => {
    if (event.target.value > 0 && event.target.value < valueSearch[1]) {
      setValueSearch([(valueSearch[0] = event.target.value), valueSearch[1]]);
    }
  };
  const styleSlider = {
    "& .MuiSlider-rail": {
      opacity: 0.3,
      backgroundColor: "#bfbfbf",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "black",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
    display: "block",
    width: "80%",
    mx: "auto",
  };
  return (
    <Stack>
      <Typography sx={{textAlign: "start",
          fontWeight: "700",
          color: "primary",
          letterSpacing: ".2rem",
        }}
      >
        Range Price ($) :
      </Typography>
      <Stack direction={{ xs: "column" }} sx={{ my: 2 }}>
        <Slider
          max={2000}
          getAriaLabel={() => "Temperature range"}
          value={valueSearch}
          sx={styleSlider}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Stack direction={"row"} justifyContent={"space-around"} >
          <TextField
            size="small"
            type="number"
            value={valueSearch[0]}
            sx={{ mx: 4 }}
            onChange={handleChangeMin}
          />
          <TextField
            size="small"
            type="number"
            value={valueSearch[1]}
            sx={{ mx: 4 }}
            onChange={handleChangeMax}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
