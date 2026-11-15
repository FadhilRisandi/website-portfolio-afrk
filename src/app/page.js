import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101010] text-[#f2f0e9]">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
}
