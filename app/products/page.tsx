import { ProductsList } from "@/components/Products";
import { Container } from "@mui/material";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Loading from "./loading";
export const metadata: Metadata = {
  title: "Products",
};
const Filter = dynamic(() => import("@/components/NavbarBotoon/Filter"), {
  ssr: false,
});
async function getProducts() {
  const apiUrl = `https://products-jtax.onrender.com/products`;

  const rep = await fetch(apiUrl, {
    next: { revalidate: 60 },
  });

  const data = await rep.json();
  return data;
}
const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const product = await getProducts();
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "row", width: "100%" }}
      >
        <Filter />
        <ProductsList product={product} />
      </Container>
    </>
  );
};

export default page;
