import { Award, ExternalLink, FileText } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { certificates } from "../data/certificates";
import { resolvePublicAssetUrl } from "../data/assets";

export function CertificatesSection() {
  return (
    <section id="certificados" className="px-5 pb-20 pt-20 md:px-8 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-[1240px]">
        <FadeIn
          className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end"
          y={32}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/60">
              certificados
            </p>
            <h2 className="hero-heading mt-4 text-5xl font-black uppercase leading-none tracking-normal md:text-7xl">
              certificados
            </h2>
          </div>
          <p className="max-w-2xl text-base font-light leading-8 text-[#D7E2EA]/68 md:text-right">
            Formação complementar e certificações que fortalecem minha base em
            conectividade, modelagem de software, programação e desenvolvimento de
            soluções computacionais.
          </p>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {certificates.map((certificate, index) => (
            <FadeIn
              key={certificate.id}
              delay={index * 0.06}
              scale={0.98}
              y={28}
              className="h-full"
            >
              <article className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[1.75rem] border border-[#D7E2EA]/10 bg-[#D7E2EA]/6 p-5 shadow-2xl shadow-black/24 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/28 hover:bg-[#D7E2EA]/8 md:p-6">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_30%_0%,rgba(103,232,249,0.16),transparent_54%),radial-gradient(circle_at_75%_10%,rgba(167,139,250,0.12),transparent_48%)] opacity-80"
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-100/12 bg-[#0C0C0C]/58 text-cyan-100 shadow-lg shadow-cyan-300/5">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-[#D7E2EA]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/64">
                    {certificate.year}
                  </span>
                </div>

                <div className="relative z-10 mt-8 flex flex-1 flex-col">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/58">
                    {certificate.institution} / {certificate.workload}
                  </p>
                  <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-normal text-[#D7E2EA] md:text-3xl">
                    {certificate.title}
                  </h3>
                  <p className="mt-5 flex-1 text-base font-light leading-8 text-[#D7E2EA]/72">
                    {certificate.description}
                  </p>

                  <a
                    href={resolvePublicAssetUrl(certificate.fileUrl)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D7E2EA]/16 px-5 text-sm font-semibold uppercase tracking-wide text-[#D7E2EA] transition duration-200 hover:border-cyan-200/55 hover:bg-cyan-200/10 focus-visible:ring-2 focus-visible:ring-cyan-200"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    ver certificado
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
