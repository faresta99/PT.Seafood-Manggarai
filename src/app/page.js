import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialSection />
      <GallerySection />
      <CallToAction />
      <Footer />
    </>
  );
}
