import { profile } from "../data/profile";

const navItems = [
  { label: "sobre", href: "#sobre" },
  { label: "skills", href: "#skills" },
  { label: "projetos", href: "#projetos" },
  { label: "certificados", href: "#certificados" },
  { label: "contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D7E2EA]/8 bg-[#0C0C0C]/72 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#topo"
          className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D7E2EA] transition duration-200 hover:opacity-70"
          aria-label="Voltar ao início"
        >
          {profile.shortName}
        </a>

        <nav className="flex items-center gap-2 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-[#D7E2EA] sm:gap-5 sm:text-[0.64rem] sm:tracking-[0.22em] md:gap-7 md:text-xs">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition duration-200 hover:opacity-70 ${
                item.label === "skills" ? "hidden sm:inline" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
