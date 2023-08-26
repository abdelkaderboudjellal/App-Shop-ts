"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
type Props = {};

const ButtonComponent = (props: Props) => {
  const navigate = useRouter();
  return (
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
  );
};

export default ButtonComponent;
