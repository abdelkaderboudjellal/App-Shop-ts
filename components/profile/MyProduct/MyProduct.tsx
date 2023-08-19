"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext, useEffect, useState } from "react";

import { useSession } from "next-auth/react";

import { Product } from "@/types/types";
import Image from "next/image";
import { Edit, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Visibility from "@mui/icons-material/Visibility";

const MyProduct = () => {
  const { data: session, status } = useSession();
  const [myProduct, setMyProduct] = useState<Product[]>([]);
  const navigate = useRouter();
  const theme = useTheme();

  async function getMyProduct() {
    const res = await fetch(
      `https://products-jtax.onrender.com/products?seller=${session?.user?.email}`
    );
    const Myproduct = await res.json();

    setMyProduct(Myproduct);
  }
  async function editProduct(idSelect: number) {
    const ProductEdit = myProduct.find((product) => product.id === idSelect);

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...ProductEdit,
        available: !ProductEdit?.available,
      }),
    };
    const res = await fetch(
      `https://products-jtax.onrender.com/products/${idSelect}`,
      requestOptions
    );
    const Myproduct = await res.json();

    setMyProduct(Myproduct);
  }
  useEffect(() => {
    getMyProduct();
  }, [myProduct]);

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
          },
          gap: 2,
        }}
      >
        {myProduct.length > 0 &&
          myProduct.map((product: Product) => {
            return (
              <Card key={product.id}>
                <CardContent sx={{ m: 0, p: 0 }}>
                  <Image
                    src={product.thumbnail}
                    width={400}
                    height={500}
                    style={{ width: "100%", height: 250 }}
                    alt={product.title}
                    objectFit="cover"
                    priority
                  />
                  <Stack direction={"column"} padding={2} alignItems={"start"}>
                    <Typography
                      sx={{
                        fontWeight: "700",
                      }}
                      variant="body1"
                      component="p"
                    >
                      {product.title}
                    </Typography>
                    <Stack
                      width={"100%"}
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        sx={{
                          fontWeight: "700",
                        }}
                        variant="body1"
                        component="p"
                      >
                        {product.price}$
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 500 }}
                        variant="subtitle1"
                        component="p"
                      >
                        {product.category}
                      </Typography>
                    </Stack>
                    <Stack
                      width={"100%"}
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        sx={{
                          fontWeight: "700",
                        }}
                        variant="body1"
                        component="p"
                      >
                        {product.brand}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 500 }}
                        variant="subtitle1"
                        component="p"
                      >
                        ({product.stock})
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="success"
                    sx={{ color: "white" }}
                    fullWidth
                    onClick={() => {
                      navigate.push(`profile/editproduct/${product.id}`);
                    }}
                    endIcon={<Edit />}
                  >
                    edit
                  </Button>
                  {product.available ? (
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      sx={{ color: "white" }}
                      fullWidth
                      onClick={() => {
                        editProduct(product.id);
                      }}
                      endIcon={<Visibility />}
                    >
                      available
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      sx={{ color: "white" }}
                      fullWidth
                      onClick={() => {
                        editProduct(product.id);
                      }}
                      endIcon={<VisibilityOff />}
                    >
                      not available
                    </Button>
                  )}
                </CardActions>
              </Card>
            );
          })}
      </Box>
    </div>
  );
};

export default MyProduct;
