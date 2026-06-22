import { useEffect, useMemo, useState } from "react";
import type { marqueeItems } from "../data/projects";

type MarqueeItem = (typeof marqueeItems)[number];

type MarqueeRowProps = {
  items: MarqueeItem[];
  direction: "left" | "right";
};

export function MarqueeRow({ items, direction }: MarqueeRowProps) {
  const [scrollY, setScrollY] = useState(0);
  const repeatedItems = useMemo(() => [...items, ...items, ...items], [items]);
  const multiplier = direction === "right" ? 0.14 : -0.14;
  const offset = scrollY * multiplier;

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-3">
      <div
        className="flex w-max gap-4 will-change-transform md:gap-5"
        style={{
          transform: `translate3d(calc(-33.33% + ${offset}px), 0, 0)`,
        }}
      >
        {repeatedItems.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="metal-panel project-preview-grid flex h-[220px] w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-[#D7E2EA]/10 p-5 shadow-2xl shadow-black/30 md:h-[270px] md:w-[420px] md:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/70">
                  {item.category}
                </p>
                <h3 className="mt-3 max-w-[15rem] text-2xl font-semibold leading-tight text-[#D7E2EA] md:text-3xl">
                  {item.title}
                </h3>
              </div>
              <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.75)]" />
            </div>

            <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
              <div className="space-y-2">
                <span className="block h-3 w-full rounded-full bg-[#D7E2EA]/14" />
                <span className="block h-3 w-10/12 rounded-full bg-[#D7E2EA]/10" />
                <span className="block h-3 w-7/12 rounded-full bg-[#D7E2EA]/10" />
              </div>
              <div className="grid grid-cols-3 items-end gap-1.5">
                <span className="h-10 rounded-t-md bg-cyan-300/25" />
                <span className="h-16 rounded-t-md bg-violet-300/25" />
                <span className="h-12 rounded-t-md bg-[#D7E2EA]/20" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wide text-[#D7E2EA]/75"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
