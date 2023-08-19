"use client";
import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext, useState } from "react";

import { Close } from "@mui/icons-material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { ProductsContexts } from "../context/productscontext";
import CalculatedTotal from "./CalculatedTotal";
import CardProductSlected from "./CardProductSlected";
type Props = {
  anchor: "left" | "right";
};
const ProductSelect = ({ anchor }: Props) => {
  const theme = useTheme();
  const {
    product,

    dataSelect,

    toggleDrawer,
  } = useContext(ProductsContexts);
  const countProduct = dataSelect.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  let Total = 0;

  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: 500 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        p: 2,
      }}
      role="presentation"
      onKeyDown={() => toggleDrawer(anchor, false)}
    >
      <Stack
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ px: 1, justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              width: "full",
              fontWeight: "600",
              color: "black",
            }}
          >
            Cart ({countProduct})
          </Typography>
          <IconButton
            aria-label="delete"
            size="medium"
            onClick={toggleDrawer(anchor, false)}
          >
            <Close fontSize="inherit" />
          </IconButton>
        </Stack>

        {product.length > 0 ? (
          dataSelect?.map((item) => {
            Total = Total + product[item.id - 1]?.price * item.quantity;

            return (
              <CardProductSlected
                key={item.id}
                id={item.id}
                thumbnail={item.thumbnail}
                price={item.price}
                title={item.title}
                quantity={item.quantity}
                category={item.category}
                brand={item.brand}
              />
            );
          })
        ) : (
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={2}
            width={1}
            height={600}
            direction="column"
          >
            <CircularProgress color="primary" />
          </Stack>
        )}
        {Total > 0 && <CalculatedTotal price={Total} product={dataSelect} />}

        {dataSelect?.length === 0 && product.length > 0 && (
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={2}
            height={600}
            direction="column"
          >
            <RemoveShoppingCartIcon
              sx={{ width: 200, height: 150, color: "text.secondary" }}
            />
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                width: "full",
                fontWeight: "600",
                color: "text.secondary",
              }}
            >
              No Product Selected
            </Typography>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default ProductSelect;
