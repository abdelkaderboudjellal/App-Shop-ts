"use client";
import AppBar from "@mui/material/AppBar";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

import { Box, Stack, Typography } from "@mui/material";
import { ControlPoint } from "@mui/icons-material";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import Drawers from "../drawer/Drawers";

import SearchBar from "./SearchBar";

const BottomAppBar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ display: { md: "none" }, top: "auto", bottom: 0 ,zIndex:0}}
        
      >
        <Stack direction="row" justifyContent="center" spacing={3}>
          <Stack spacing={0}>
            <Box color="inherit">
              <Drawers CardShop={<SearchIcon />} anchor={"top"}>
                <SearchBar key={"SearchBar"} anchor={"top"} />
              </Drawers>
            </Box>
            <Typography>Search</Typography>
          </Stack>
          <Stack spacing={1.5}>
            <IconButton color="inherit">
              <AutoAwesomeMosaicIcon />
            </IconButton>
            <Typography>Categories</Typography>
          </Stack>
          <Stack spacing={1.5}>
            <IconButton color="inherit">
              <ControlPoint />
            </IconButton>
            <Typography>Annonce </Typography>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
};

export default BottomAppBar;
