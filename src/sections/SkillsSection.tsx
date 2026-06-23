import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../data/skills";

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="rounded-t-[2rem] bg-[#D7E2EA] px-5 py-20 text-[#0C0C0C] md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#646973]">
          skills
        </p>
        <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-normal text-[#0C0C0C] md:text-7xl">
          o que eu construo
        </h2>

        <div className="mt-12 border-t border-[#0C0C0C]/14">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.number}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.05,
              }}
              className="grid gap-4 border-b border-[#0C0C0C]/14 py-7 md:grid-cols-[0.28fr_1fr] md:gap-8 md:py-9"
            >
              <span className="text-5xl font-black leading-none text-[#646973]/65 md:text-7xl">
                {skill.number}
              </span>
              <div>
                <h3 className="text-2xl font-semibold uppercase tracking-wide md:text-4xl">
                  {skill.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base font-light leading-8 text-[#0C0C0C]/72 md:text-lg">
                  {skill.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
