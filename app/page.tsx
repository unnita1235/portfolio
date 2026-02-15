import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import OpenTo from '@/components/OpenTo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <OpenTo />
      <Contact />
      <Footer />
    </div>
  );
}
