import BinaryRain from "@/components/BinaryRain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Rain is fixed — only visible through the semi-transparent hero */}
      <BinaryRain />
      <div style={{ position:"relative", zIndex:1 }}>
        <Navbar />
        <main>
          <Hero />
          {/* All sections below have solid backgrounds — rain doesn't show through */}
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
