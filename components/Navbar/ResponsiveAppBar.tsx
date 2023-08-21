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

import LogoShopView from "../drawer/LogoShopView";
import ListPages from "./ListPages";

import { useRouter } from "next/navigation";
import Link from "next/link";
import ProductSelect from "../ProductSelect/ProductSelect";
import SearchNavbar from "./SearchNavbar";
import { useContext, useState } from "react";
import { ProductsContexts } from "../context/productscontext";
import { getSession, useSession } from "next-auth/react";

import MenuProfile from "../menuProfile/MenuProfile";

const pages = [
  { id: 1, Name: "Home", Path: "/" },
  { id: 2, Name: "Products", Path: "/products" },
  { id: 3, Name: "Local Shopping", Path: "/" },
];

function ResponsiveAppBar() {
  const { user, setUser } = useContext(ProductsContexts);
  const { data: session, status } = useSession();
  const navigate = useRouter();

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

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const styleMenu = {
    overflow: "visible",
    /* filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))", */
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "white",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  };
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
                  m: 2,
                  color: "primary",

                  "&::before": {
                    content: '" "',
                    position: "absolute",
                    width: "100%",
                    height: "3px",
                    borderRadius: "4px",
                    bgcolor: "#18272F",
                    bottom: "0",
                    left: "0",
                    transformOrigin: "right",
                    transform: "scaleX(0)",
                    transition: "transform .3s ease-in-out",
                  },
                  "&:hover::before": {
                    transformOrigin: "left",
                    transform: "scaleX(1)",
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
          {session ? (
            <MenuProfile />
          ) : (
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
