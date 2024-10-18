import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import HeroSection from "@/components/heroSection";
import LeadingCompanies from "@/components/leadingCompanies";
import ManageMoney from "@/components/manageMoney";
import OurGoals from "@/components/ourGoals";
import OurPlatform from "@/components/ourPlatform";
import PayWithoutWorry from "@/components/payWithoutWorry";
import Product from "@/components/product";
import Security from "@/components/security";
import SomeHeading from "@/components/someHeading";
import WhyChooseParamotor from "@/components/whyChooseParamotor";


export default function Home() {
  return (
  <>
  <HeroSection/>
  <LeadingCompanies/>
  <SomeHeading/>
  <PayWithoutWorry/>
  <Product/>
  <OurGoals/>
  <ManageMoney/>
  <WhyChooseParamotor/>
  <OurPlatform/>
  <Security/>
  <FAQ/>
  <CTA/>
  </>
  );
}
