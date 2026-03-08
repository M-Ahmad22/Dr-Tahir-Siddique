import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import ConditionsSection from "@/components/ConditionsSection";
import AppointmentSection from "@/components/AppointmentSection";
import VideoSection from "@/components/VideoSection";
import BlogPreview from "@/components/BlogPreview";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import AssociateDoctors from "@/components/AssociateDoctors";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import EducationSection from "@/components/EducationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutPreview />
        <EducationSection />
        <ServicesPreview />
        <ConditionsSection />
        <AppointmentSection />

        <BlogPreview />
        <TestimonialsSlider />
        <AssociateDoctors />
        <VideoSection />
        <FAQSection />
        <ContactSection />
        {/* <GallerySection /> */}
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </>
  );
};

export default Index;
