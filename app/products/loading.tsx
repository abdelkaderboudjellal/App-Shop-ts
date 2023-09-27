"use client";
import LaodingProduct from "@/components/Laoding/LaodingProduct";
import { Box, Container, Skeleton, Stack } from "@mui/material";

const Loading = () => {
  return (
    <>
      <Stack
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ my: 4, width: "100%" }}
      >
        <Container
          maxWidth="xl"
          sx={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <Stack
            spacing={5}
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "30%",
              minHeight: "70vh",
              display: { xs: "none", md: "block" },
              minWidth: 260,
              border: "1px  solid #9e9e9e",
              m: 1,
              p: 1,
            }}
          >
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              sx={{ borderBottom: "1px solid  #9e9e9e", pb: 2 }}
            >
              <Skeleton animation="wave" height={50} width={"50%"} />
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"} spacing={6}>
              <Skeleton
                animation="wave"
                height={80}
                width={"80%"}
                sx={{ borderRadius: "25px" }}
              />
              <Skeleton
                animation="wave"
                height={80}
                width={"80%"}
                sx={{ borderRadius: "25px" }}
              />
              <Stack width={"100%"}>
                <Skeleton animation="wave" height={14} width={"20%"} />
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Skeleton animation="wave" height={30} width={"80%"} />
                  <Stack
                    direction={"row"}
                    width={"100%"}
                    justifyContent={"space-around"}
                  >
                    <Skeleton animation="wave" height={60} width={"30%"} />
                    <Skeleton animation="wave" height={60} width={"30%"} />
                  </Stack>
                </Stack>
              </Stack>
              <Skeleton animation="wave" height={80} width={"80%"} />
              <Skeleton animation="wave" height={50} width={"40%"} />
            </Stack>
          </Stack>
          <Stack width={"100%"}>
            <Skeleton animation="wave" height={50} width={"150px"} />
            <Box
              sx={{
                width: "100%",
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
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Loading;
