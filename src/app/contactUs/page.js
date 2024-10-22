import ContactHeroSection from "@/components/contactHeroSection";
import CTA from "@/components/cta";
import DropContactMessage from "@/components/dropContactMessage";
import GetInTouch from "@/components/getInTouch";

export default function contactUs() {
  return (
    <>
      <ContactHeroSection />
      <DropContactMessage/>
      <GetInTouch/>
      <CTA/>
    </>
  );
}
