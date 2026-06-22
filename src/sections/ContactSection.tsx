import { GitBranch, Mail, Network } from "lucide-react";
import { ContactButton } from "../components/ContactButton";
import { FadeIn } from "../components/FadeIn";
import { profile } from "../data/profile";

export function ContactSection() {
  const emailHref = `mailto:${profile.email}`;

  return (
    <section id="contato" className="px-5 pb-10 pt-16 md:px-8 md:pb-12 md:pt-20">
      <div className="mx-auto max-w-[1180px] rounded-[2rem] border border-[#D7E2EA]/10 bg-[#D7E2EA]/6 px-5 py-12 md:px-10 md:py-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/60">
            contato
          </p>
          <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-none tracking-normal text-[#D7E2EA] md:text-7xl">
            vamos construir algo útil?
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <FadeIn delay={0.08}>
            <p className="max-w-2xl text-lg font-light leading-9 text-[#D7E2EA]/75 md:text-xl">
              se você quer falar sobre sistemas internos, automação de processos, ia aplicada ou projetos operacionais, me chama.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ContactButton
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                icon={<GitBranch className="h-4 w-4" aria-hidden="true" />}
                label="github"
              />
              <ContactButton
                href={profile.linkedinUrl || undefined}
                icon={<Network className="h-4 w-4" aria-hidden="true" />}
                label="linkedin"
                disabled={!profile.linkedinUrl}
              />
              <ContactButton
                href={emailHref}
                icon={<Mail className="h-4 w-4" aria-hidden="true" />}
                label="email"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
