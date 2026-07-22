import HeroSection from "@/components/HeroSection";
import SignatureDishSection from "@/components/SignatureDishSection";
import StorySection from "@/components/StorySection";
import MenuPreview from "@/components/MenuPreview";
import ReviewsSection from "@/components/ReviewsSection";
import GalleryPreview from "@/components/GalleryPreview";
import VisitSection from "@/components/VisitSection";
import ContactPageContent from "@/components/ContactPageContent";

export default function Home() {
  return <><HeroSection /><SignatureDishSection /><StorySection /><MenuPreview /><ReviewsSection /><GalleryPreview /><ContactPageContent embedded /><VisitSection /></>;
}
