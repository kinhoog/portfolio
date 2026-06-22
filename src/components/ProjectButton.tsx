import type { AnchorHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";

type ProjectButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

export function ProjectButton({
  children,
  variant = "secondary",
  ...props
}: ProjectButtonProps) {
  const variants = {
    primary:
      "border-cyan-300/50 bg-cyan-300/12 text-cyan-100 hover:bg-cyan-300/20",
    secondary:
      "border-[#D7E2EA]/15 bg-[#D7E2EA]/5 text-[#D7E2EA] hover:bg-[#D7E2EA]/10",
  };

  return (
    <a
      {...props}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 text-xs font-semibold uppercase tracking-wide transition duration-200 ${variants[variant]}`}
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
