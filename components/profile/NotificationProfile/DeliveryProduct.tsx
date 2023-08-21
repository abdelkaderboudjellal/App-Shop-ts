import { ProductSelect, ProductValid } from "@/types/types";
import { Cancel, DoneOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  products: ProductValid[];
  id: number;
  email: string;
};

const DeliveryProduct = ({ products, id, email }: Props) => {
  const { data: session, status } = useSession();
  async function updateResource(valid: boolean, productId: number) {
    const apiUrl = `https://products-jtax.onrender.com/delivery/${id}`;
    const productValid = products.find((product) => product.id === productId);

    const oldData = products.filter((product) => product.id != productId);
    const data = { ...productValid, valid: valid };
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: [...oldData, data],
        email,
        id,
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();
    } catch (error) {
      console.error("Error updating resource:", error);
    }
  }
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(2,1fr)" },
        }}
      >
        {products?.map((product) => {
          if (product.seller === session?.user?.email) {
            return (
              <Card
                key={product.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  borderRadius: "0px",

                  border: "none",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "space-between" },
                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "row" },
                    width: 1,
                    gap: 1,
                  }}
                >
                  <Image
                    src={product.thumbnail}
                    width={120}
                    height={75}
                    style={{
                      borderRadius: 10,
                      objectFit: "cover",
                    }}
                    alt={product.title}
                    loading="lazy"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      width: 1,
                      justifyContent: { xs: "center", sm: "space-between" },
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: "600", color: "#0009" }}
                      component="h5"
                      variant="body1"
                    >
                      {product.title}
                    </Typography>
                    <Typography variant="body1" component="h1">
                      $ {product.price} * {product.quantity}= ${" "}
                      {product.price * product.quantity}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="h1"
                      sx={{ color: "#0009" }}
                    >
                      {product.category} / {product.brand}
                    </Typography>
                  </Box>
                  {product.valid ? (
                    <Chip color="success" sx={{ width: "50%" }} label="Valid" />
                  ) : (
                    <Chip
                      sx={{ width: "50%" }}
                      color="error"
                      label="Non Valid"
                    />
                  )}
                </CardContent>
                <CardActions>
                  <Stack
                    width={"100%"}
                    spacing={0.5}
                    direction={{ xs: "row", sm: "column" }}
                    justifyContent={{ xs: "space-around", sm: "space-between" }}
                    alignItems={"center"}
                  >
                    <IconButton
                      aria-label="valid"
                      onClick={() => {
                        updateResource(true, product.id);
                      }}
                    >
                      <DoneOutline color="success" />
                    </IconButton>
                    <IconButton
                      aria-label="valid"
                      onClick={() => {
                        updateResource(false, product.id);
                      }}
                    >
                      <Cancel color="error" />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Card>
            );
          }
        })}
      </Box>
    </>
  );
};

export default DeliveryProduct;
