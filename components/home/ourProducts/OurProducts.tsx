"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CarouselHome from "../flashSales/CarouselHome";
import { Product } from "@/types/types";
import ProductCard from "@/components/Products/productcard";
import { useRouter } from "next/navigation";

type Props = {
  products: Product[];
};

const OurProducts = ({ products }: Props) => {
  const navigate = useRouter();

  const showProductCarousel = (products: Product[]) => {
    let showProduct = [];
    for (let index = 1; index < products.length - 1; ) {
      showProduct.push(
        <Stack spacing={2} sx={{ mx: 2 }} key={index}>
          <ProductCard item={products[index]} />
          <ProductCard item={products[index + 1]} />
        </Stack>
      );
      index += 2;
    }
    return showProduct;
  };

  return (
    <Container sx={{ my: 4 }}>
      <Stack alignItems={"center"} spacing={2} direction={"row"}>
        <Box
          sx={{
            width: "15px",
            height: "40px",
            bgcolor: "#db4444",
            borderRadius: "3px",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{ color: "#db4444", fontWeight: 600 }}
        >
          Our products
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"start"}
        spacing={{ xs: 2, md: 10 }}
        pt={2}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          minWidth={"max-content"}
          sx={{ textTransform: "capitalize" }}
        >
          Export Our products
        </Typography>
      </Stack>
      <CarouselHome desktop={4} tablet={3} mobile={1}>
        {showProductCarousel(products)}
      </CarouselHome>
      <Stack alignItems={"center"} width={"100%"}>
        <Button
          variant="contained"
          size="large"
          color="error"
          sx={{ width: "max-content", px: 3, py: 1, fontWeight: 500 }}
          onClick={() => navigate.push("/products")}
        >
          View all Products
        </Button>
      </Stack>
    </Container>
  );
};

export default OurProducts;
