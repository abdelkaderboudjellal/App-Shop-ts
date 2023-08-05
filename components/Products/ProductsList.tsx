"use client";
import { useContext, useState } from "react";

import Typography from "@mui/material/Typography";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import {
  Box,
  CircularProgress,
  Container,
  Pagination,
  Stack,
} from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Skeleton from "@mui/material/Skeleton";
import { ProductsContexts } from "../context/productscontext";
import ProductCard from "./productcard";
import LaodingProduct from "../Laoding/LaodingProduct";
import usePagination from "../Pagination/Pagination";
import { Product } from "@/types/types";
import SplitButton from "../category/SplitButton";
/* import SplitButton from "./Product/SplitButton"; */
/* import ProductCard from "./CardProduct/ProductCard"; */
/* import LaodingProduct from "./LaodingProduct/LaodingProduct"; */

const ProductsList = () => {
  const { product, result, selectedIndex, searchName, valueSearch } =
    useContext(ProductsContexts);

  const PER_PAGE = 8;
  let dataFiltering: Product[] = [];
  const DataFilter = product.map((item) => {
    if (
      (item.category === result[selectedIndex] &&
        item.title.toLowerCase().includes(searchName.toLowerCase())) ||
      (result[selectedIndex] === "All product" &&
        item.title.toLowerCase().includes(searchName.toLowerCase()) &&
        item.price > valueSearch[0] &&
        item.price < valueSearch[1])
    ) {
      return dataFiltering.push(item);
    }
  });

  let [page, setPage] = useState(1);
  let count = Math.ceil(dataFiltering.length / PER_PAGE);
  const _DATA = usePagination(dataFiltering, PER_PAGE);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Stack
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ my: 8 }}
      >
        <Container>
          <Box
            sx={{
              width: 200,
              display: "flex",
              justifyContent: "start",
              my: 1,
            }}
          >
            <SplitButton options={result} width={200} />
          </Box>
          {product.length <= 0 ? (
            <Box
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: {
                  sx: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                rowGap: 3,
                columnGap: 2,
              }}
            >
              {Array.from(new Array(8)).map((item, index) => (
                <LaodingProduct key={index} />
              ))}
            </Box>
          ) : dataFiltering.length === 0 ? (
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={2}
              height={600}
              direction="column"
            >
              <ProductionQuantityLimitsIcon
                sx={{ width: 200, height: 150, color: "text.secondary" }}
              />
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  width: "full",
                  fontWeight: "600",
                  color: "primary",
                }}
              >
                No results
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  width: "full",
                  fontWeight: "500",
                  color: "text.secondary",
                }}
              >
                Check the spelling of the words used Search all categories
              </Typography>
            </Stack>
          ) : null}

          <Box
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: {
                sx: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              rowGap: 3,
              columnGap: 2,
            }}
          >
            {_DATA.currentData().length > 0 &&
              _DATA.currentData().map((item) => {
                return <ProductCard item={item} key={item.id} />;
              })}
          </Box>
        </Container>
        <Pagination
          color="primary"
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default ProductsList;
