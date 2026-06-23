import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, GitBranch, MonitorUp, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../data/projects";
import { resolvePublicAssetUrl } from "../data/assets";
import { ProjectButton } from "./ProjectButton";

type ProjectGalleryModalProps = {
  onClose: () => void;
  project: Project;
};

function ModalPlaceholder({ project }: { project: Project }) {
  return (
    <div className="project-preview-grid flex min-h-[280px] flex-col justify-between rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 p-5 md:min-h-[420px]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/60">
            preview em estrutura
          </p>
          <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#D7E2EA]">
            {project.title}
          </h3>
        </div>
        <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.75)]" />
      </div>

      <div className="grid grid-cols-[1fr_0.8fr] gap-4">
        <div className="space-y-3 rounded-xl border border-[#D7E2EA]/10 bg-black/20 p-4">
          <span className="block h-3 w-11/12 rounded-full bg-[#D7E2EA]/14" />
          <span className="block h-3 w-8/12 rounded-full bg-[#D7E2EA]/10" />
          <span className="block h-20 rounded-lg bg-cyan-300/10" />
        </div>
        <div className="grid grid-cols-3 items-end gap-2 rounded-xl border border-[#D7E2EA]/10 bg-black/18 p-4">
          <span className="h-16 rounded-t-md bg-cyan-300/25" />
          <span className="h-28 rounded-t-md bg-violet-300/24" />
          <span className="h-20 rounded-t-md bg-[#D7E2EA]/20" />
        </div>
      </div>
    </div>
  );
}

export function ProjectGalleryModal({ onClose, project }: ProjectGalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const images = useMemo(() => {
    if (project.galleryImages.length) {
      return project.galleryImages;
    }

    return project.coverImage ? [project.coverImage] : [];
  }, [project]);
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setActiveIndex(0);
    setExpandedImage(false);
  }, [project.id]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (expandedImage) {
          setExpandedImage(false);
          return;
        }

        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [expandedImage, onClose]);

  function showPreviousImage() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  }

  function showNextImage() {
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#0C0C0C]/86 px-4 py-5 text-[#D7E2EA] backdrop-blur-xl md:px-8 md:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
        data-project-modal={project.id}
        className="mx-auto grid max-w-[1320px] gap-6 rounded-[28px] border border-[#D7E2EA]/12 bg-[#101010]/96 p-4 shadow-2xl shadow-black/60 md:p-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] xl:grid-cols-[minmax(0,1.45fr)_minmax(390px,0.62fr)]"
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="min-w-0">
          <div className="relative overflow-hidden rounded-2xl border border-[#D7E2EA]/10 bg-[radial-gradient(circle_at_50%_20%,rgba(103,232,249,0.10),transparent_34%),#050505]">
            {activeImage ? (
              <button
                type="button"
                data-project-image-main={project.id}
                className="block h-[300px] w-full bg-black/18 outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 sm:h-[380px] lg:h-[500px] 2xl:h-[590px]"
                onClick={() => setExpandedImage(true)}
                aria-label={`Ampliar imagem: ${activeImage.caption}`}
              >
                <img
                  src={resolvePublicAssetUrl(activeImage.src)}
                  alt={activeImage.alt}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </button>
            ) : (
              <ModalPlaceholder project={project} />
            )}

            {activeImage ? (
              <button
                type="button"
                data-project-image-expand={project.id}
                className="absolute right-3 top-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/70 px-3 text-xs font-semibold uppercase tracking-wide text-[#D7E2EA] backdrop-blur transition hover:bg-[#D7E2EA]/10 focus-visible:ring-2 focus-visible:ring-cyan-200"
                onClick={() => setExpandedImage(true)}
                aria-label={`Ampliar imagem: ${activeImage.caption}`}
              >
                <Expand className="h-4 w-4" aria-hidden="true" />
                ampliar
              </button>
            ) : null}

            {hasMultipleImages ? (
              <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
                <button
                  type="button"
                  data-project-gallery-prev={project.id}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/70 text-[#D7E2EA] backdrop-blur transition hover:bg-[#D7E2EA]/10 focus-visible:ring-2 focus-visible:ring-cyan-200"
                  onClick={showPreviousImage}
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  data-project-gallery-next={project.id}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/70 text-[#D7E2EA] backdrop-blur transition hover:bg-[#D7E2EA]/10 focus-visible:ring-2 focus-visible:ring-cyan-200"
                  onClick={showNextImage}
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap items-start justify-between gap-3 text-sm text-[#D7E2EA]/62">
            <div className="max-w-3xl">
              <p
                className="font-medium text-[#D7E2EA]/78"
                data-project-gallery-caption={project.id}
              >
                {activeImage?.caption ?? "Preview visual"}
              </p>
              {activeImage?.description ? (
                <p
                  className="mt-2 leading-7 text-[#D7E2EA]/60"
                  data-project-gallery-description={project.id}
                >
                  {activeImage.description}
                </p>
              ) : null}
            </div>
            <p
              className="rounded-full border border-[#D7E2EA]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide"
              data-project-gallery-counter={project.id}
            >
              {activeIndex + 1} / {Math.max(images.length, 1)}
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/60">
                {project.number} / {project.category}
              </p>
              <h2
                id={`project-modal-title-${project.id}`}
                className="mt-3 text-3xl font-semibold leading-tight text-[#D7E2EA] md:text-5xl"
              >
                {project.title}
              </h2>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              data-project-modal-close={project.id}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 focus-visible:ring-2 focus-visible:ring-cyan-200"
              onClick={onClose}
              aria-label="Fechar galeria"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-5 text-base font-light leading-8 text-[#D7E2EA]/76 md:text-lg">
            {project.description}
          </p>

          <div className="mt-7">
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

          <div className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#D7E2EA]/45">
              destaques
            </p>
            <ul className="grid gap-2 text-sm font-light text-[#D7E2EA]/76">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/75" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demoUrl ? (
              <ProjectButton href={project.demoUrl} target="_blank" rel="noreferrer" variant="primary">
                <MonitorUp className="h-4 w-4" aria-hidden="true" />
                abrir demo
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
      </motion.div>

      <AnimatePresence>
        {expandedImage && activeImage ? (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[#050505]/98 p-4 backdrop-blur-xl md:p-8"
            data-project-image-expanded={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setExpandedImage(false);
              }
            }}
          >
            <motion.div
              className="relative flex max-h-full w-full max-w-[1600px] flex-col gap-4"
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.985 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                data-project-image-expanded-close={project.id}
                className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C]/76 text-[#D7E2EA] backdrop-blur transition hover:bg-[#D7E2EA]/10 focus-visible:ring-2 focus-visible:ring-cyan-200"
                onClick={() => setExpandedImage(false)}
                aria-label="Fechar imagem ampliada"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="overflow-hidden rounded-2xl border border-[#D7E2EA]/12 bg-black shadow-2xl shadow-black/70">
                <img
                  src={resolvePublicAssetUrl(activeImage.src)}
                  alt={activeImage.alt}
                  className="max-h-[82vh] w-full object-contain"
                />
              </div>
              <div className="max-w-5xl text-sm text-[#D7E2EA]/70">
                <p className="font-medium text-[#D7E2EA]/84">{activeImage.caption}</p>
                {activeImage.description ? (
                  <p className="mt-1 leading-7">{activeImage.description}</p>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
