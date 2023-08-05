import { Fragment, useContext, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProductsContexts } from "../context/productscontext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const LogoShopView = () => {
  const { product, addProduct, dataSelect, deletProduct, toggleDrawer, state } =
    useContext(ProductsContexts);
  const countProduct = dataSelect.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  return (
    <>
      <Box
        aria-label="cart"
        sx={{
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <Badge badgeContent={countProduct} color="error">
          <AddShoppingCartIcon color="primary" />
        </Badge>
      </Box>
    </>
  );
};

export default LogoShopView;
