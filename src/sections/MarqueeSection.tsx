import { MarqueeRow } from "../components/MarqueeRow";
import { marqueeItems } from "../data/projects";

export function MarqueeSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#D7E2EA]/8 bg-[#101010] py-10 md:py-14">
      <div className="mx-auto mb-5 flex max-w-[1440px] items-end justify-between gap-5 px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/60">
          previews
        </p>
        <p className="hidden max-w-sm text-right text-sm font-light text-[#D7E2EA]/55 md:block">
          recortes reais dos projetos em sistemas internos, automações, dashboards e ia aplicada.
        </p>
      </div>
      <div className="space-y-1">
        <MarqueeRow items={marqueeItems} direction="right" />
        <MarqueeRow items={[...marqueeItems].reverse()} direction="left" />
      </div>
    </section>
  );
}
