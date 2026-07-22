import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";
export const metadata: Metadata = { title: "Contact", description: "Send a message to Birriería Baldomeros #2 in Los Angeles with questions about our menu, orders or your visit.", alternates: { canonical: "/contact" } };
export default function ContactPage() { return <ContactPageContent />; }
