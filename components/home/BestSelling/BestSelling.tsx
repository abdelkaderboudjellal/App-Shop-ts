import { Product } from "@/types/types";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CarouselHome from "../flashSales/CarouselHome";
import ProductCard from "@/components/Products/productcard";
import ButtonHome from "./ButtonHome";

type Props = {
  products: Product[];
};

const BestSelling = ({ products }: Props) => {
  const finalProducts = products.filter((product) => product.seller != null);
  return (
    <div>
      <Container>
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
            This Month
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"start"}
          spacing={{ xs: 2, md: 10 }}
          pt={2}
        >
          <Typography variant="h5" fontWeight={600} minWidth={"max-content"}>
            best selling products
          </Typography>
        </Stack>
        <CarouselHome desktop={4} tablet={3} mobile={1}>
          {finalProducts.map((prod) => {
            return (
              <Box sx={{ mx: 2 }} key={prod.id}>
                <ProductCard item={prod} />
              </Box>
            );
          })}
        </CarouselHome>
        <Stack alignItems={"center"} width={"100%"}>
          <ButtonHome />
        </Stack>
      </Container>
    </div>
  );
};

export default BestSelling;
