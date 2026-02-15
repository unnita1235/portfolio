import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import OpenTo from '@/components/OpenTo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Capabilities from '@/components/Capabilities';

export default function Home() {
  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Capabilities />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <OpenTo />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
