"use client";
import { Button, Container } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageNotfound = () => {
  const navigate = useRouter();
  return (
    <Container sx={{ my: 8, position: "relative" }}>
      <Image
        width={300}
        height={300}
        style={{ width: "100%", height: "100%", position: "relative" }}
        alt=""
        objectFit="cover"
        src="/images/Page-not-Found.svg"
        priority
      />
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "85%",
          bottom: "15%",
          left: "50%",
          height: 28,

          transform: " translate(-50%, -50%)",
        }}
        onClick={() => navigate.push("/")}
      >
        Go to home
      </Button>
    </Container>
  );
};
export default PageNotfound;
