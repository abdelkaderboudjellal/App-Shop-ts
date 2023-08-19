"use client";
import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "@/types/types";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { ProductsContexts } from "../context/productscontext";

import Image from "next/image";
import { useSession } from "next-auth/react";

type Props = {
  item: Product;
};
const ProductCard = ({ item }: Props) => {
  const { addProduct } = useContext(ProductsContexts);
  const { data: session, status } = useSession();
  const navigate = useRouter();
  return (
    <Card>
      <CardContent sx={{ m: 0, p: 0 }}>
        <Image
          src={item.thumbnail}
          width={1000}
          height={1000}
          style={{ width: "100%", height: 250, objectFit: "cover" }}
          alt={item.title}
          priority
        />
        <Stack direction={"column"} padding={2} alignItems={"start"}>
          <Typography
            sx={{
              fontWeight: "700",

              height: 50,
            }}
            variant="body1"
            component="p"
          >
            {item.title}
          </Typography>
          <Typography
            sx={{ fontWeight: 500 }}
            variant="subtitle1"
            component="p"
          >
            ${item.price}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        {session?.user?.email === item.seller && item.seller != undefined ? (
          <Button
            size="small"
            variant="contained"
            color="success"
            sx={{ color: "white" }}
            fullWidth
            onClick={() => {
              navigate.push(`/profile/editproduct/${item.id}`);
            }}
          >
            edit Product
          </Button>
        ) : (
          <Button
            size="small"
            variant="contained"
            color="primary"
            sx={{ color: "white" }}
            fullWidth
            onClick={() => {
              addProduct(item.id);
            }}
          >
            Add to cart
          </Button>
        )}

        <Button
          onClick={() => navigate.push(`/previewproduct/${item.id}`)}
          size="small"
          variant="outlined"
          color="primary"
          fullWidth
        >
          Preview
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
