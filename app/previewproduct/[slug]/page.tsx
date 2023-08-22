/* import { PreviewProduct } from "@/components/Products"; */
import { Product } from "@/types/types";

import { notFound } from "next/navigation";
export const metadata = {
  title: "Preview Product page",
};
import dynamic from "next/dynamic";

const PreviewProduct = dynamic(
  () => import("@/components/Products/PreviewProduct"),
  {
    ssr: false,
  }
);
export async function generateStaticParams() {
  const res = await fetch("https://products-jtax.onrender.com/products", {
    next: { revalidate: 60 },
  });

  const products = await res.json();

  const paths = products.map((product: Product) => {
    return {
      slug: product.id,
    };
  });
  return [paths];
}
async function getProducts(slug: string) {
  const apiUrl = `https://products-jtax.onrender.com/products/${slug}`;

  const rep = await fetch(apiUrl, {
    next: { revalidate: 60 },
  });
  if (!rep.ok) {
    notFound();
  }

  const data = await rep.json();
  return data;
}
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getProducts(slug);

  return <PreviewProduct product={product} />;
}
