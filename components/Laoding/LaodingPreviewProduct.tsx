"use client";
import React from "react";
import Card from "@mui/material/Card";
import styles from "./Laoding.module.css";
import CardContent from "@mui/material/CardContent";

import Skeleton from "@mui/material/Skeleton";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
const LaodingPreviewProduct = () => {
  return (
    <>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(2,1fr)" },
          py: 12,
          gap: 3,
        }}
      >
        <Card sx={{ minWidth: 275, border: "none" }}>
          <CardContent>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Skeleton
                sx={{
                  position: "relative",
                  height: 450,
                  width: "100%",
                }}
                animation="wave"
                variant="rectangular"
              />

              <Image
                width={0}
                height={0}
                className={styles.Laodingpage}
                src="/images/loadingImage.svg"
                alt={"LaodingImage"}
                loading="lazy"
              />
            </Box>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <Skeleton animation="wave" height={50} width={"50%"} />{" "}
              <Skeleton animation="wave" height={50} width={"50%"} />
              <Skeleton animation="wave" height={50} width={"50%"} />
              <Skeleton animation="wave" height={50} width={"50%"} />
            </Stack>
          </CardContent>
        </Card>

        <Stack spacing={2} sx={{ minWidth: 275, border: "none" }}>
          <Skeleton animation="wave" height={50} width={"50%"} />{" "}
          <Skeleton animation="wave" height={30} width={"25%"} />
          <Skeleton animation="wave" height={30} width={"50%"} />
          <Skeleton animation="wave" height={30} width={"25%"} />
          <Skeleton animation="wave" height={60} width={"40%"} />
          <Skeleton animation="wave" height={60} width={"40%"} />
          <Skeleton animation="wave" height={50} width={"80%"} />
        </Stack>
      </Container>
    </>
  );
};

export default LaodingPreviewProduct;
