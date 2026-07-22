import type { Metadata } from "next";
import VisitSection from "@/components/VisitSection";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Address, phone and hours for Birriería Baldomeros #2: 3104 Maple Ave, Los Angeles, CA 90011. Open daily except Wednesdays.",
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <div className="pt-2">
      <VisitSection as="h1" />
    </div>
  );
}
