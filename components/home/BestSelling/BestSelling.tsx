import { Product } from "@/types/types";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CarouselHome from "../flashSales/CarouselHome";
import ProductCard from "@/components/Products/productcard";
import ButtonHome from "./ButtonHome";
import TitlePages from "@/element/TitlePages";

type Props = {
  products: Product[];
};

const BestSelling = ({ products }: Props) => {
  const finalProducts = products.filter((product) => product.seller != null);
  return (
    <div>
      <Container>
        <TitlePages title={"This Month"} subtitle={"best selling products"} />
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
