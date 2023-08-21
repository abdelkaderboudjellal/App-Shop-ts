import { ProductsList } from "@/components/Products";
import CarouselHome from "@/components/about/CarouselHome";

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
      <ProductsList product={product} />
    </main>
  );
}
