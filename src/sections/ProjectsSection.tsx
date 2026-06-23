import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectGalleryModal } from "../components/ProjectGalleryModal";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <FadeIn
          className="mb-10 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end"
          y={32}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/60">
              portfolio
            </p>
            <h2 className="hero-heading mt-4 text-6xl font-black uppercase leading-none tracking-normal md:text-8xl">
              projetos
            </h2>
          </div>
          <p className="max-w-xl text-base font-light leading-8 text-[#D7E2EA]/68 md:text-right">
            primeira versão com três projetos principais e placeholders visuais para trocar por prints reais depois.
          </p>
        </FadeIn>

        <div>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectGalleryModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
