import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}