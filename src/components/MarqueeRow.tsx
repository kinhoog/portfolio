import { useEffect, useMemo, useState } from "react";
import type { marqueeItems } from "../data/projects";
import { resolvePublicAssetUrl } from "../data/assets";

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
            className="metal-panel relative h-[220px] w-[300px] shrink-0 overflow-hidden rounded-2xl border border-[#D7E2EA]/10 shadow-2xl shadow-black/30 md:h-[270px] md:w-[420px]"
          >
            {item.previewImage ? (
              <img
                src={resolvePublicAssetUrl(item.previewImage.src)}
                alt={item.previewImage.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="project-preview-grid absolute inset-0" aria-hidden="true" />
            )}

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/98 via-[#0C0C0C]/62 to-[#0C0C0C]/24"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(103,232,249,0.22),transparent_34%)]"
            />

            <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/78">
                    {item.category}
                  </p>
                  <h3 className="mt-3 max-w-[14rem] text-xl font-semibold leading-tight text-[#D7E2EA] md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <span className="h-3 w-3 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.75)]" />
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D7E2EA]/12 bg-[#0C0C0C]/55 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wide text-[#D7E2EA]/82 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
