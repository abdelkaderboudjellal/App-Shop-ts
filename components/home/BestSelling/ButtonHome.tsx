"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const ButtonHome = (props: Props) => {
  const navigate = useRouter();
  return (
    <Button
      variant="contained"
      size="large"
      color="error"
      sx={{ width: "max-content", px: 3, py: 1, fontWeight: 500 }}
      onClick={() => navigate.push("/products")}
    >
      View all Products
    </Button>
  );
};

export default ButtonHome;
