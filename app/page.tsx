import { ProductsList } from "@/components/Products";
import CarouselHome from "@/components/about/CarouselHome";
import BestSelling from "@/components/home/BestSelling/BestSelling";
import Category from "@/components/home/CategoryBrowse/Category";
import Featured from "@/components/home/featured/Featured";
import FlashSales from "@/components/home/flashSales/FlashSales";
import OurProducts from "@/components/home/ourProducts/OurProducts";

async function getProducts() {
  const apiUrl = `https://products-jtax.onrender.com/products`;

  const rep = await fetch(apiUrl, {
    next: { revalidate: 1 },
  });
  const data = await rep.json();
  return data;
}

export default async function Home() {
  const product = await getProducts();

  return (
    <main>
      <CarouselHome />
      <FlashSales products={product} />
      <Category />
      <BestSelling products={product} />
      <OurProducts products={product} />
    </main>
  );
}
