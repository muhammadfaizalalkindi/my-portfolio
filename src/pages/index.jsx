import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Organizations from "@/components/Organizations";
import Footer from "@/components/Footer";
import { DockComponent } from "@/components/Dock";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Organizations />
      </main>
      <Footer />
      <DockComponent />
    </div>
  );
}
