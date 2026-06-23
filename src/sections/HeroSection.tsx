import { useEffect, useRef, useState } from "react";
import { ArrowDown, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { TypewriterText } from "../components/TypewriterText";
import { HERO_IMAGE_URL, profile } from "../data/profile";

const HERO_VIDEO_URL = `${import.meta.env.BASE_URL}assets/hero/animacao-erick.mp4`;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (reduceMotion || videoFailed) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    void video.play().catch(() => {
      // Muted autoplay can still be blocked in some browser states.
    });
  }, [reduceMotion, videoFailed]);

  function handleVideoEnded() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();

    if (Number.isFinite(video.duration)) {
      video.currentTime = Math.max(video.duration - 0.05, 0);
    }
  }

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] items-start overflow-hidden px-5 pb-8 pt-20 md:px-8 md:pb-10 md:pt-24"
    >
      <div aria-hidden="true" className="tech-grid absolute inset-0 -z-20" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-cyan-300/12 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[42%] -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-300/8 blur-3xl"
      />

      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
        <FadeIn>
          <h1 className="hero-heading hero-heading-size whitespace-normal text-center font-black uppercase leading-[0.84] tracking-normal sm:whitespace-nowrap">
            {profile.headline}
          </h1>
        </FadeIn>

        <motion.div
          className="relative mx-auto mt-4 flex w-full max-w-[720px] justify-center sm:mt-5 md:max-w-[820px] lg:max-w-[900px] xl:max-w-[960px]"
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-[9%] bottom-[8%] top-[2%] rounded-full bg-[radial-gradient(circle_at_50%_46%,rgba(69,210,255,0.28),transparent_52%),radial-gradient(circle_at_50%_58%,rgba(117,91,255,0.20),transparent_58%)] blur-3xl"
          />
          <div className="relative z-10 mx-auto w-full overflow-hidden bg-black shadow-[0_0_80px_rgba(75,211,255,0.10)]">
            {videoFailed || reduceMotion ? (
              <img
                src={HERO_IMAGE_URL}
                alt="Foto de Erick Rocha"
                className="mx-auto block max-h-[42svh] w-full bg-black object-contain drop-shadow-[0_28px_90px_rgba(75,211,255,0.18)] sm:max-h-[45svh] md:max-h-[48svh] lg:max-h-[50svh] xl:max-h-[52svh] 2xl:max-h-[56svh]"
                loading="eager"
              />
            ) : (
              <video
                ref={videoRef}
                muted
                playsInline
                autoPlay
                preload="metadata"
                onEnded={handleVideoEnded}
                onError={() => setVideoFailed(true)}
                className="mx-auto block max-h-[42svh] w-full bg-black object-contain drop-shadow-[0_28px_90px_rgba(75,211,255,0.18)] sm:max-h-[45svh] md:max-h-[48svh] lg:max-h-[50svh] xl:max-h-[52svh] 2xl:max-h-[56svh]"
                aria-label="Animação 3D de Erick Rocha"
              >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
              </video>
            )}
          </div>
        </motion.div>

        <FadeIn delay={0.22}>
          <p className="mt-4 min-h-[2.25rem] max-w-full text-center text-sm font-medium uppercase tracking-[0.18em] text-[#D7E2EA] sm:text-lg md:mt-5 md:text-2xl">
            <TypewriterText text={profile.subtitle} />
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm font-light leading-7 text-[#D7E2EA]/80 sm:text-base md:mt-5 md:text-lg md:leading-8">
            {profile.description}
          </p>
        </FadeIn>

        <div className="mt-6 flex w-full flex-row justify-center gap-3 sm:w-auto md:mt-7">
          <a
            href="#projetos"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 px-4 text-xs font-semibold uppercase tracking-wide text-[#0C0C0C] shadow-tech-glow transition duration-200 hover:scale-[1.02] sm:flex-none sm:px-6 sm:text-sm"
          >
            ver projetos
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contato"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[#D7E2EA]/20 px-4 text-xs font-semibold uppercase tracking-wide text-[#D7E2EA] transition duration-200 hover:border-cyan-200/60 hover:bg-cyan-200/10 sm:flex-none sm:px-6 sm:text-sm"
          >
            falar comigo
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}