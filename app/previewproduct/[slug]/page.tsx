import { PreviewProduct } from "@/components/Products";
export const metadata = {
  title: "Preview Product page",
};
export default function Page({ params }: { params: { slug: string } }) {
  return <PreviewProduct param={params.slug} />;
}
