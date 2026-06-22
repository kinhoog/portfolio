import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ContactButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactNode;
  label: string;
  disabled?: boolean;
};

export function ContactButton({
  icon,
  label,
  disabled = false,
  ...props
}: ContactButtonProps) {
  if (disabled) {
    return (
      <span className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-3 rounded-full border border-[#D7E2EA]/15 px-5 text-sm font-medium uppercase tracking-wide text-[#D7E2EA]/40">
        {icon}
        {label}
      </span>
    );
  }

  return (
    <a
      {...props}
      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#D7E2EA]/20 px-5 text-sm font-medium uppercase tracking-wide text-[#D7E2EA] transition duration-200 hover:border-cyan-300/55 hover:bg-cyan-300/10"
    >
      {icon}
      <span>{label}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
