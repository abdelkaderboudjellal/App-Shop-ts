"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { images } from "./images";
import { useRouter } from "next/navigation";

const CarouselHome = () => {
  const navigate = useRouter();
  return (
    <>
      <Container
        sx={{
          color: "white",
          display: { xs: "none", sm: "block" },
          width: "100%",
        }}
      >
        <Carousel
          autoPlay
          stopOnHover
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          {images.map((image) => {
            return (
              <Stack
                key={image.id}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                height={400}
                sx={{ position: "relative" }}
              >
                <Box
                  sx={{
                    width: 25,
                    bgcolor: image.color,
                    height: "50%",
                    borderRadius: "0 25px  25px 0",
                  }}
                />
                <Stack
                  spacing={1}
                  justifyContent={"center"}
                  alignItems={"start"}
                  sx={{
                    my: 4,

                    p: 2,

                    width: "50%",
                  }}
                >
                  <Typography
                    color="primary"
                    variant="h4"
                    fontWeight={"600"}
                    sx={{
                      textTransform: "capitalize",
                      textAlign: "start",
                    }}
                  >
                    {image.title}
                  </Typography>
                  <Typography
                    color="primary"
                    variant="h5"
                    fontWeight={"600"}
                    sx={{ textTransform: "capitalize", textAlign: "start" }}
                  >
                    {image.brand}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="body1"
                    fontWeight={"600"}
                    sx={{
                      textAlign: "start",
                      display: { xs: "none", md: "block" },
                      width: "80%",
                    }}
                  >
                    {image.description}
                  </Typography>
                  <Typography
                    color="primary"
                    variant="subtitle1"
                    fontWeight={"700"}
                    sx={{
                      textAlign: "start",
                    }}
                  >
                    ${image.price}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      my: 2,
                      backgroundColor: image.color,
                    }}
                    onClick={() => navigate.push(image.link)}
                  >
                    Bay Now
                  </Button>
                </Stack>

                <Box
                  bgcolor={image.color}
                  sx={{
                    position: "relative",
                    height: "100%",
                    borderRadius: "35% 0 0  35% ",
                    width: { xs: "50%", md: "50%" },
                    maxWidth: "300px",
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                      height: 400,
                      mr: 25,
                      position: "absolute",
                      top: "0%",
                      bottom: "0%",
                      left: "-50%",
                      right: "0%",
                    }}
                  >
                    <Image
                      width={1000}
                      height={600}
                      src={image.thumbnail}
                      alt="image"
                      style={{
                        width: 300,
                        height: 400,
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            );
          })}
        </Carousel>
      </Container>
    </>
  );
};

export default CarouselHome;
