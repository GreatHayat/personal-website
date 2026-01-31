import About from "@/components/About";
import FinalCTA from "@/components/Cta";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
