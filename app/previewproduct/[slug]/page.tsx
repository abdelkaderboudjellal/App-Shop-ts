/* import { PreviewProduct } from "@/components/Products"; */
import { Product } from "@/types/types";

import { notFound } from "next/navigation";

import dynamic from "next/dynamic";

const PreviewProduct = dynamic(
  () => import("@/components/Products/PreviewProduct"),
  {
    ssr: false,
  }
);

import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const apiUrl = `https://products-jtax.onrender.com/products/${slug}`;
  const rep = await fetch(apiUrl, {
    next: { revalidate: 1 },
  });
  if (!rep.ok) {
    notFound();
  }
  const product = await rep.json();

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: [product.thumbnail],
    },
    description: product.description,
    icons: { icon: product.thumbnail },
  };
}

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
    next: { revalidate: 1 },
  });
  if (!rep.ok) {
    notFound();
  }

  const data = await rep.json();
  return data;
}
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product: Product = await getProducts(slug);

  return <PreviewProduct product={product} />;
}
