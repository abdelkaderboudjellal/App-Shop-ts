"use client";
import { Button, Container } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageNotfound = () => {
  const navigate = useRouter();
  return (
    <Container maxWidth="md" sx={{ my: 8, position: "relative" }}>
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
        size="small"
        sx={{
          position: "absolute",
          top: "85%",
          bottom: "15%",
          left: "50%",
          py: 2,
          transform: " translate(-50%, -50%)",
        }}
        onClick={() => navigate.push("/")}
      >
        Go to home page
      </Button>
    </Container>
  );
};
export default PageNotfound;
