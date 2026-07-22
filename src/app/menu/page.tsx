import type { Metadata } from "next";
import MenuPageContent from "@/components/MenuPageContent";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Full menu of Birriería Baldomeros #2: goat birria, menudo, tacos, burritos, quesabirria and more. Jalisco-style flavor in Los Angeles.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return <MenuPageContent />;
}
