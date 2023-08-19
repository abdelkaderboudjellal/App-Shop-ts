import { Profile } from "@/components/profile";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "profile",
  description: " ",
};
export default function Page() {
  return <Profile />;
}
