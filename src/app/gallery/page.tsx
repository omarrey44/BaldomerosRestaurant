import type { Metadata } from "next";
import GalleryPageContent from "@/components/GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of the goat birria, tacos, menudo, specialties and the Birriería Baldomeros #2 restaurant in Los Angeles.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
