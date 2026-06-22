import { FadeIn } from "../components/FadeIn";
import { profile } from "../data/profile";

export function AboutPreviewSection() {
  return (
    <section id="sobre" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.45fr_1fr]">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/60">
            sobre mim
          </p>
        </FadeIn>

        <div className="space-y-7">
          <FadeIn delay={0.08}>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-[#D7E2EA] md:text-6xl">
              tecnologia prática para organizar operação, dados e fluxos internos.
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="max-w-3xl text-lg font-light leading-9 text-[#D7E2EA]/78 md:text-xl">
              {profile.about}
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="max-w-3xl text-lg font-light leading-9 text-[#D7E2EA]/68 md:text-xl">
              {profile.aboutSecond}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
