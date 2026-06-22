import { ArrowDown, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { TypewriterText } from "../components/TypewriterText";
import { HERO_IMAGE_URL, profile } from "../data/profile";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pb-10 pt-20 md:px-8 md:pt-24"
    >
      <div aria-hidden="true" className="tech-grid absolute inset-0 -z-20" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-cyan-300/12 to-transparent"
      />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-7 lg:gap-8">
        <FadeIn>
          <h1 className="hero-heading hero-heading-size whitespace-normal text-center font-black uppercase leading-[0.84] tracking-normal sm:whitespace-nowrap lg:text-left">
            {profile.headline}
          </h1>
        </FadeIn>

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.68fr)] lg:gap-8">
          <div className="order-2 min-w-0 max-w-3xl text-center lg:order-1 lg:text-left">
            <FadeIn delay={0.1}>
              <p className="min-h-[2.5rem] max-w-full text-base font-medium uppercase tracking-[0.2em] text-[#D7E2EA] sm:text-xl md:text-2xl">
                <TypewriterText text={profile.subtitle} />
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p className="mx-auto mt-5 max-w-full text-base font-light leading-8 text-[#D7E2EA]/80 sm:max-w-2xl md:text-lg lg:mx-0">
                {profile.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href="#projetos"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 px-6 text-sm font-semibold uppercase tracking-wide text-[#0C0C0C] shadow-tech-glow transition duration-200 hover:scale-[1.02]"
                >
                  ver projetos
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contato"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D7E2EA]/20 px-6 text-sm font-semibold uppercase tracking-wide text-[#D7E2EA] transition duration-200 hover:border-cyan-200/60 hover:bg-cyan-200/10"
                >
                  falar comigo
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Magnet className="relative w-[min(72vw,300px)] sm:w-[390px] md:w-[430px] lg:w-[min(36vw,520px)]">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.96 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="animate-float-soft relative"
              >
                <div
                  aria-hidden="true"
                  className="hero-image-halo absolute inset-[-11%] -z-10 rounded-full blur-2xl"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-[#D7E2EA]/14 bg-[#D7E2EA]/5 shadow-2xl shadow-black/55">
                  <img
                    src={HERO_IMAGE_URL}
                    alt="Foto de Erick Rocha"
                    className="aspect-square w-full object-contain"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
