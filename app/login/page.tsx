import { Login } from "@/components/login";
import { redirect } from "next/navigation";
import { getServerSession  } from "next-auth/next";
export const metadata = {
  title: "Login page",
};
export default async function Page() {
  const session = await getServerSession ();

  // If already connected, can not access to `/signin`.
  if (session?.user) redirect("/");
  return <Login  />;
}