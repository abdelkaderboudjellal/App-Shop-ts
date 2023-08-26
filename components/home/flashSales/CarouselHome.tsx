"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { ReactNode } from "react";
import {
  ButtonGroupProps,
  ArrowProps,
  DotProps,
} from "react-multi-carousel/lib/types";

import { Box, IconButton, Stack } from "@mui/material";
import { East, West } from "@mui/icons-material";
interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string;
}
type Props = {
  children: ReactNode;
  desktop: number;
  tablet: number;
  mobile: number;
};
const CarouselHome = ({ children, mobile, tablet, desktop }: Props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktop,
    },
    tablet: {
      breakpoint: { max: 1024, min: 637 },
      items: tablet,
    },
    mobile: {
      breakpoint: { max: 637, min: 0 },
      items: mobile,
    },
  };
  const ButtonGroup = ({ next, previous }: ButtonGroupProps & DotProps) => {
    return (
      <Stack
        sx={{ position: "absolute", bottom: "100%" }}
        direction={"row"}
        width={1}
        justifyContent={"end"}
      >
        <IconButton
          sx={{ bgcolor: "#bdbdbd", aspectRatio: 1 / 1 }}
          onClick={() => previous?.()}
        >
          <West color="primary" />
        </IconButton>
        <IconButton
          sx={{ bgcolor: "#bdbdbd", aspectRatio: 1 / 1 }}
          onClick={() => next?.()}
        >
          <East color="primary" />
        </IconButton>
      </Stack>
    );
  };

  return (
    <Box sx={{ py: 2, position: "relative" }}>
      <Carousel
        responsive={responsive}
        ssr={true}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        arrows={false}
      >
        {children}
      </Carousel>
    </Box>
  );
};

export default CarouselHome;
