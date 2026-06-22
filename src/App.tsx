import { AboutPreviewSection } from "./sections/AboutPreviewSection";
import { ContactSection } from "./sections/ContactSection";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-sans text-[#D7E2EA]">
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutPreviewSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
