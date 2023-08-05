"use client"
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Avatar from "@mui/material/Avatar";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Home, LocalShipping } from "@mui/icons-material";

import { Box, IconButton } from "@mui/material";
import { ProductsContexts } from "../context/productscontext";
import { useRouter } from 'next/navigation'
type Props = {
  anchor: "left" | "right";
};
export default function ListPages({ anchor }: Props) {
  const { toggleDrawer } = React.useContext(ProductsContexts);
  const [open, setOpen] = React.useState(true);
  const Navigate = useRouter();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box width={{ xs: "100vw", md: 600 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "10px",
          backgroundColor: "transparent",
        }}
      >
        <Box sx={{ my: 2, cursor: "pointer" }}>
          <Avatar
            onClick={() => {
              Navigate.push("/");
            }}
            variant="square"
            sx={{ width: 100, height: 40 }}
            alt="Logo-Shop"
            src={"/images/LogoShop.svg"}
          />
        </Box>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List
        sx={{ width: { xs: "auto", sm: 350 }, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          onClick={() => {
            Navigate.push("/");
          }}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            Navigate.push("/");
          }}
        >
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalShipping />
          </ListItemIcon>
          <ListItemText primary="LocalShipping" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="..........." />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
