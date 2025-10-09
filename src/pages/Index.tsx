import { Hero } from "@/components/Hero";
import { AboutBook } from "@/components/AboutBook";
import { AboutAuthor } from "@/components/AboutAuthor";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { VideoGallery } from "@/components/VideoGallery";
import { ContactGuarantee } from "@/components/ContactGuarantee";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutBook />
      <AboutAuthor />
      <Benefits />
      <Pricing />
      <VideoGallery />
      <FAQ />
      <ContactGuarantee />
      <Footer />
    </div>
  );
};

export default Index;
