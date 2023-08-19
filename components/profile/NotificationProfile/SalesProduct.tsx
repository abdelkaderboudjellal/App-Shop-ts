import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Stack } from "@mui/material";
import { ProductValid } from "@/types/types";
import Image from "next/image";
import { DoneOutline, Update } from "@mui/icons-material";
type Props = {
  products: ProductValid[];
};
export default function Sales({ products }: Props) {
  return (
    <>
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
        {products.map((product) => {
          if (product.valid === true) {
            return (
              <Card key={product.id}>
                <CardContent sx={{ m: 0, p: 0 }}>
                  <Image
                    src={product.thumbnail}
                    width={300}
                    height={500}
                    style={{ width: "100%", height: 250 }}
                    alt={product.title}
                    objectFit="cover"
                    priority
                  />
                  <Stack sx={{ width: 1 }}>
                    <Typography gutterBottom variant="h5" component="h1">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      component={"div"}
                      color="text.secondary"
                    >
                      We guarantee delivery of these products within a specified
                      time frame.
                      <DoneOutline color="success" />
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            );
          } else {
            return (
              <Card key={product.id}>
                <CardContent sx={{ m: 0, p: 2 }}>
                  <Image
                    src={product.thumbnail}
                    width={300}
                    height={500}
                    style={{ width: "100%", height: 200 }}
                    alt={product.title}
                    objectFit="cover"
                    priority
                  />
                  <Stack sx={{ width: 1 }}>
                    <Typography gutterBottom variant="h5" component="h1">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      component={"div"}
                      color="text.secondary"
                    >
                      We will confirm such acceptance (if any) by sending you an
                      email confirming that we have received your order at which
                      point a purchase agreement between us will be formed.
                      <Update color="error" />
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            );
          }
        })}
      </Box>
    </>
  );
}
