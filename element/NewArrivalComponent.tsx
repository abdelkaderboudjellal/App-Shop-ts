import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
type Props = {
  images: string;
  title: string;
  description: string;
};

const NewArrivalComponent = ({ images, title, description }: Props) => {
  return (
    <>
      <Image
        src={images}
        width={800}
        height={800}
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid color-mix(in srgb, black 20%, white)",
        }}
        alt={"dddd"}
        objectFit="cover"
      />
      <Stack
        direction={"column"}
        justifyContent={"end"}
        spacing={1}
        sx={{
          position: "absolute",
          color: "white",
          bottom: "0%",
          width: "100%",
          height: "100%",
          bgcolor: `color-mix(in srgb, black 50%, transparent)`,
          padding: "10%",
          opacity: 0,

          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color={"secondary.text"}>
          {description}
        </Typography>
        <Link href={"/products"} style={{ color: "white" }}>
          {" "}
          Shop Now
        </Link>
      </Stack>
    </>
  );
};

export default NewArrivalComponent;
