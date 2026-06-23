import { FadeIn } from "../components/FadeIn";
import { resolvePublicAssetUrl } from "../data/assets";
import { ABOUT_IMAGE_URL, profile } from "../data/profile";

export function AboutPreviewSection() {
  return (
    <section id="sobre" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/60">
            sobre mim
          </p>
        </FadeIn>

        <div className="mt-8 flex w-full flex-col items-center space-y-7">
          <FadeIn delay={0.08}>
            <h2 className="mx-auto max-w-6xl text-3xl font-semibold leading-tight text-[#D7E2EA] md:text-5xl lg:text-[3.35rem]">
              <span className="block">tecnologia que resolve de verdade</span>
              <span className="block">
                sistemas, automações e ia no dia a dia da operação.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mx-auto max-w-4xl text-lg font-light leading-9 text-[#D7E2EA]/78 md:text-xl">
              {profile.about}
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <p className="mx-auto max-w-4xl text-lg font-light leading-9 text-[#D7E2EA]/68 md:text-xl">
              {profile.aboutSecond}
            </p>
          </FadeIn>

          <FadeIn delay={0.28} duration={0.7} scale={0.96} y={40}>
            <div className="relative mx-auto mt-12 w-full max-w-[620px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#D7E2EA]/10 via-[#D7E2EA]/5 to-cyan-300/5 p-2 shadow-[0_28px_90px_rgba(0,0,0,0.42),0_0_55px_rgba(75,211,255,0.08)]">
              <div
                aria-hidden="true"
                className="absolute inset-x-10 top-0 h-24 rounded-full bg-cyan-200/10 blur-3xl"
              />

              <img
                src={resolvePublicAssetUrl(ABOUT_IMAGE_URL)}
                alt="Foto de Erick Rocha em contexto pessoal"
                className="relative aspect-[4/5] w-full rounded-[24px] object-cover object-top"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}