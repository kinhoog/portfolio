import { GitBranch, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "../data/projects";
import { ProjectButton } from "./ProjectButton";

type ProjectCardProps = {
  project: Project;
};

const accentClasses = {
  cyan: "from-cyan-300/24 via-cyan-300/8 to-transparent",
  violet: "from-violet-300/24 via-violet-300/8 to-transparent",
  steel: "from-[#BBCCD7]/22 via-[#BBCCD7]/8 to-transparent",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 38, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-7 border-t border-[#D7E2EA]/10 py-10 lg:grid-cols-[0.72fr_1fr] lg:gap-10 lg:py-14"
    >
      <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[#D7E2EA]/10 bg-[#101010] p-4 shadow-2xl shadow-black/35 md:min-h-[360px]">
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${accentClasses[project.accent]}`}
        />
        <div className="project-preview-grid relative flex h-full min-h-[250px] flex-col justify-between overflow-hidden rounded-xl border border-[#D7E2EA]/10 bg-black/24 p-4 md:min-h-[328px] md:p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#D7E2EA]/55">
                preview produto
              </p>
              <h3 className="mt-2 max-w-[18rem] text-2xl font-semibold leading-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
            <Sparkles className="h-5 w-5 text-cyan-200/70" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-[1fr_0.9fr] gap-3">
            <div className="space-y-3 rounded-xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/6 p-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet-300/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D7E2EA]/45" />
              </div>
              <span className="block h-3 w-11/12 rounded-full bg-[#D7E2EA]/18" />
              <span className="block h-3 w-8/12 rounded-full bg-[#D7E2EA]/12" />
              <span className="block h-16 rounded-lg border border-cyan-300/10 bg-cyan-300/10" />
            </div>

            <div className="grid grid-cols-3 items-end gap-2 rounded-xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 p-3">
              <span className="h-16 rounded-t-md bg-cyan-300/30" />
              <span className="h-28 rounded-t-md bg-violet-300/28" />
              <span className="h-20 rounded-t-md bg-[#D7E2EA]/22" />
            </div>
          </div>

          <div className="grid gap-2">
            {[0, 1, 2].map((row) => (
              <div
                key={row}
                className="grid grid-cols-[0.8fr_1.2fr_0.7fr] gap-2"
              >
                <span className="h-8 rounded-md bg-[#D7E2EA]/8" />
                <span className="h-8 rounded-md bg-[#D7E2EA]/10" />
                <span className="h-8 rounded-md bg-cyan-300/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-7">
        <div>
          <div className="flex items-start justify-between gap-5">
            <span className="hero-heading text-6xl font-black leading-none md:text-8xl">
              {project.number}
            </span>
            <p className="max-w-[13rem] text-right text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/65">
              {project.category}
            </p>
          </div>

          <h3 className="mt-5 text-3xl font-semibold leading-tight text-[#D7E2EA] md:text-5xl">
            {project.name}
          </h3>
          <p className="mt-5 max-w-3xl text-base font-light leading-8 text-[#D7E2EA]/78 md:text-lg">
            {project.description}
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#D7E2EA]/45">
            stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-[#D7E2EA]/72"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#D7E2EA]/45">
            destaques
          </p>
          <ul className="grid gap-2 text-sm font-light text-[#D7E2EA]/76 md:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/75" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.demoUrl ? (
            <ProjectButton href={project.demoUrl} target="_blank" rel="noreferrer" variant="primary">
              ver projeto
            </ProjectButton>
          ) : null}
          {project.repoUrl ? (
            <ProjectButton href={project.repoUrl} target="_blank" rel="noreferrer">
              <GitBranch className="h-4 w-4" aria-hidden="true" />
              ver repositório
            </ProjectButton>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
