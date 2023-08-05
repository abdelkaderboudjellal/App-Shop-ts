"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import Drawer from "../drawer/Drawers";
import logo from "../../public/images/LogoShop.svg";

import LogoShopView from "../drawer/LogoShopView";
import ListPages from "./ListPages";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProductSelect from "../ProductSelect/ProductSelect";
import { useState } from "react";

import SearchNavbar from "./SearchNavbar";

const pages = [
  { id: 1, Name: "Home", Path: "/" },
  { id: 2, Name: "Products", Path: "/" },
  { id: 3, Name: "Local Shopping", Path: "/" },
];

function ResponsiveAppBar() {
  const navigate = useRouter();

  const theme = useTheme();

  const ShowMenu = (
    <Box
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="primary"
    >
      <MenuIcon />
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        borderBottom: "1px solid",
        borderBottomColor: "#bdbdbd",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            onClick={() => {
              navigate.push("/");
            }}
            variant="square"
            sx={{ width: 40, height: 40, display: { xs: "none", md: "flex" } }}
            alt="Logo-Shop"
            src={"/images/LogoShop.svg"}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Drawer anchor={"left"} CardShop={ShowMenu}>
              <ListPages key={"ListPages"} anchor={"left"} />
            </Drawer>
          </Box>

          <Box
            sx={{
              mr: 1,
              display: { xs: "none", sm: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              width: 1,
            }}
          >
            <Avatar
              onClick={() => {
                navigate.push("/");
              }}
              variant="square"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
                display: { xs: "flex", md: "none" },
              }}
              alt="Logo-Shop"
              src="/images/LogoShop.svg"
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                key={page.id}
                href={page.Path}
                sx={{
                  my: 2,
                  color: "inherit",
                  display: "block",
                  "&:hover": {
                    backgroundColor: "#fafafa",
                    fontWeight: 700,
                  },
                }}
              >
                {page.Name}
              </Button>
            ))}
          </Box>
           <SearchNavbar />

          <Drawer anchor={"right"} CardShop={<LogoShopView />}>
            <ProductSelect anchor={"right"} key={"ProductSelect"} />
          </Drawer>
          <Button
            variant="contained"
            sx={{
              fontSize: ".8rem",
              color: "white",
              borderColor: "primary",
              "&:hover": {
                borderColor: "primary",
                color: "#fff",
              },
            }}
            onClick={() => {
              navigate.push("/login");
            }}
            endIcon={<LockOpenIcon />}
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
