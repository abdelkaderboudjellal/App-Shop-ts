"use client";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { Box, Stack } from "@mui/material";
import styles from "./Laoding.module.css";
const LaodingProduct = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <Skeleton
          sx={{
            height: 250,
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
      <CardContent>
        <Skeleton
          animation="wave"
          height={25}
          width={150}
          style={{ marginBottom: 6 }}
        />
        <Skeleton animation="wave" height={25} width={60} />

        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Skeleton animation="wave" height={50} width={"50%"} />{" "}
          <Skeleton animation="wave" height={50} width={"50%"} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LaodingProduct;
