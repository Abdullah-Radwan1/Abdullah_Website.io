import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import cvPdf from "../assets/AbdullahCV.pdf";

interface HeroProps {
  onOpenCvModal?: () => void;
}

/* Reusable character-by-character animated text */
function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const letters = text.split("");

  return (
    <h1 className={className} aria-label={text}>
      {letters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{
            opacity: 0,
            y: 16,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.35,
            delay: index * 0.018,
            ease: "easeOut",
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    const offset = 80;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-72px)] flex items-center justify-center py-24 px-6 bg-bg-primary relative overflow-hidden text-center"
    >
      {/* Background Glow */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,218,220,0.35)_0%,rgba(241,250,238,0)_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1000px] mx-auto flex flex-col items-center">
        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-border-light rounded-full shadow-xs mb-7"
        >
          <span className="pulse-dot" />
          <span className="text-[0.8125rem] font-semibold text-text-secondary">
            Available for Software Engineering Roles
          </span>
        </motion.div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[0.95rem] font-bold text-accent-primary tracking-[0.12em] uppercase mb-4"
        >
          {PERSONAL_INFO.role}
        </motion.p>

        {/* Main Animated Headline */}
        <AnimatedText
          text="Building scalable, reliable software that solves real problems"
          className="m-0 max-w-[950px] text-text-primary font-extrabold text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.045em]"
        />

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.45,
            ease: "easeOut",
          }}
          className="max-w-[680px] mx-auto mt-7 text-[1.1rem] leading-[1.7] text-text-secondary"
        >
          I turn complex requirements into thoughtful, maintainable software
          through strong engineering practices and continuous learning.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.65,
            ease: "easeOut",
          }}
          className="flex flex-wrap justify-center gap-3.5 mt-9"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md bg-accent-primary text-white shadow-sm hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(230,57,70,0.35)] transition-all duration-200 cursor-pointer"
          >
            <Code2 size={18} />
            <span>View Projects</span>
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md bg-bg-surface border border-border-light text-text-primary shadow-xs hover:bg-bg-secondary hover:border-palette-steel-blue/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </button>

          <a
            href={cvPdf}
            download="Abdullah_Radwan_CV.pdf"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md bg-transparent border border-accent-border text-accent-primary hover:bg-accent-light hover:text-accent-hover transition-all duration-200 no-underline hover:-translate-y-0.5"
          >
            <FileText size={18} />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
