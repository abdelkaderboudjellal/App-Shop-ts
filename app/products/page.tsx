"use client";
import { ProductsList } from "@/components/Products";
import { ProductsContexts } from "@/components/context/productscontext";
import React, { useContext } from "react";

type Props = {};

const page = () => {
  const { product } = useContext(ProductsContexts);
  return (
    <div>
      <ProductsList product={product} />
    </div>
  );
};

export default page;
