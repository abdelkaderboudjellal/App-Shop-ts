import ProductCard from "@/components/Products/productcard";
import IconComponents from "@/components/iconcomponents/IconCmponents";
import { Product, Users } from "@/types/types";

import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
async function getUser(id: string) {
  const apiUrl = `https://products-jtax.onrender.com/user?email=${id}@gmail.com`;

  const rep = await fetch(apiUrl, {
    next: { revalidate: 1 },
  });
  const data = await rep.json();
  return data;
}
async function getProduct(email: string) {
  const apiUrl = `https://products-jtax.onrender.com/products?seller=${email}`;

  const rep = await fetch(apiUrl, {
    cache: "no-store",
    next: { revalidate: 1 },
  });
  const data = await rep.json();
  return data;
}
export async function generateStaticParams() {
  const res = await fetch("https://products-jtax.onrender.com/user", {
    next: { revalidate: 1 },
  });

  const result = await res.json();

  const paths = result.map((item: Users) => {
    return {
      seller: item.email.toString().split("@")[0],
    };
  });
  return [paths];
}

export default async function Page({ params }: { params: { seller: string } }) {
  const { seller } = params;
  const data = await getUser(seller);

  const user = data[0];
  const product = await getProduct(user.email);
  const countProduct = product.length;

  return (
    <Box>
      <Stack sx={{ position: "relative", width: "100%" }}>
        <Box
          sx={{
            height: 250,
            position: "relative",
            m: "0px!important",
            padding: "0px!important",
            zIndex: "0!important",
            borderRadius: " 25px  25px  0 0",
          }}
        >
          <Image
            layout="fill"
            src={"/images/profileCover.jpg"}
            alt="account cover"
            objectFit="cover"
            loading="lazy"
          />
        </Box>
        <Container
          sx={{
            width: "100%",
            position: "relative",
            borderRadius: " 0 0 25px 25px",
            boxShadow: 2,
            py: 2,
            mb: 4,
          }}
        >
          <Box
            sx={{
              bgcolor: "white",
              width: { xs: 90, md: 150 },
              height: { xs: 90, md: 150 },
              position: "absolute",
              mt: -16,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              margin: "0px",
              top: "0%",
              bottom: "50%",
              left: { xs: "50%", md: "12%" },
              transform: " translate(-50%, -50%)",
              boxShadow: 2,
            }}
          >
            <Avatar
              sx={{ width: { xs: 80, md: 140 }, height: { xs: 80, md: 140 } }}
              src={"/images/23788731_6862537.jpg"}
            />
          </Box>

          <Stack
            sx={{ mt: { xs: 6, md: 10 } }}
            spacing={1}
            justifyContent={{ xs: "center", md: "start" }}
            alignItems={{ xs: "center", md: "start" }}
          >
            <Typography
              variant="subtitle1"
              component={"h5"}
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              {user.firstName} {user.lastName}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: "text.secondary",
                textAlign: "center",
              }}
            >
              Sale and maintenance of computer hardware.
            </Typography>
          </Stack>
          <IconComponents countProduct={countProduct} email={user.email} />
        </Container>
        <Container sx={{ borderRadius: " 25px", boxShadow: 2, p: 2 }}>
          <Box
            component={"div"}
            sx={{
              width: "100%",
              minHeight: 500,

              zIndex: 2,
              bgcolor: "white",
            }}
          >
            <Box
              sx={{
                position: "relative",

                display: "grid",
                gridTemplateColumns: "repeat(1,1fr)",
                gap: 2,
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  variant="contained"
                  sx={{ width: "150px", borderRadius: "9px" }}
                >
                  Filter
                </Button>
              </Stack>
              <Stack width={"100%"}>
                <Box
                  sx={{
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: {
                      sx: "repeat(1, auto)",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                      lg: "repeat(4, 1fr)",
                    },
                    rowGap: 3,
                    columnGap: 2,
                    mx: 2,
                  }}
                >
                  {product.length > 0 &&
                    product.map((item: Product) => {
                      if (item.available === true) {
                        return <ProductCard item={item} key={item.id} />;
                      }
                    })}
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Stack>
    </Box>
  );
  // ...
}
