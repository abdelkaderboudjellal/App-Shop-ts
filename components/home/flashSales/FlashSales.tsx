"use client";
import { Product } from "@/types/types";

import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CarouselHome from "./CarouselHome";

import ProductCard from "@/components/Products/productcard";

import ButtonHome from "../BestSelling/ButtonHome";

type Props = {
  products: Product[];
};
const timer = [
  { Name: "Day", Value: "03" },
  { Name: "Hours", Value: "23" },
  { Name: "Minutes", Value: "19" },
  { Name: "Seconds", Value: "56" },
];
const FlashSales = ({ products }: Props) => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("10/25/2023").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = +`${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = +`0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = +`0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = +`0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  const productShow = products.filter((product) => product.price < 50);
  return (
    <>
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
            today's
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"start"}
          spacing={{ xs: 2, md: 10 }}
          pt={2}
          mb={{ xs: 8, sm: 0 }}
        >
          <Typography variant="h5" fontWeight={600} minWidth={"max-content"}>
            Flash sales
          </Typography>
          <Stack direction={"row"} sx={{ mb: { xs: 4, md: 0 } }}>
            <Stack mx={1} direction={"row"} spacing={2} alignItems={"center"}>
              <Stack alignItems={"center"}>
                <Typography variant="subtitle2" fontWeight={600}>
                  days
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {state.days}
                </Typography>
              </Stack>
              <Typography
                variant="h4"
                sx={{ color: "#db4444", fontWeight: 600 }}
              >
                :
              </Typography>
            </Stack>
            <Stack mx={1} direction={"row"} spacing={2} alignItems={"center"}>
              <Stack alignItems={"center"}>
                <Typography variant="subtitle2" fontWeight={600}>
                  hours
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {state.hours}
                </Typography>
              </Stack>
              <Typography
                variant="h4"
                sx={{ color: "#db4444", fontWeight: 600 }}
              >
                :
              </Typography>
            </Stack>
            <Stack mx={1} direction={"row"} spacing={2} alignItems={"center"}>
              <Stack alignItems={"center"}>
                <Typography variant="subtitle2" fontWeight={600}>
                  minutes
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {state.minutes}
                </Typography>
              </Stack>
              <Typography
                variant="h4"
                sx={{ color: "#db4444", fontWeight: 600 }}
              >
                :
              </Typography>
            </Stack>
            <Stack mx={1} direction={"row"} spacing={2} alignItems={"center"}>
              <Stack alignItems={"center"}>
                <Typography variant="subtitle2" fontWeight={600}>
                  seconds
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {state.seconds}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <CarouselHome desktop={4} tablet={3} mobile={1}>
          {productShow.map((product) => {
            if (product.price < 100) {
              return (
                <Box sx={{ mx: 2 }} key={product.id}>
                  <ProductCard item={product} />
                </Box>
              );
            }
          })}
        </CarouselHome>
        <Stack alignItems={"center"} width={"100%"}>
          <ButtonHome />
        </Stack>
      </Container>
    </>
  );
};

export default FlashSales;
