import { Navbar } from "./components/layout/Navbar";
import { PageEffects } from "./components/effects/PageEffects";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Footer } from "./components/sections/Footer";
import { GitHub } from "./components/sections/GitHub";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Testimonials } from "./components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <PageEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHub />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
