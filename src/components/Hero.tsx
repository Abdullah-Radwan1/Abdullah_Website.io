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
      style={{
        minHeight: "calc(100vh - var(--header-height))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.07) 0%, rgba(250, 250, 252, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.4rem 0.9rem",
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--border-light)",
            borderRadius: "var(--radius-full)",
            boxShadow: "var(--shadow-xs)",
            marginBottom: "1.75rem",
          }}
        >
          <span className="pulse-dot" />

          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
            }}
          >
            Available for Software Engineering Roles
          </span>
        </motion.div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "var(--accent-primary)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          {PERSONAL_INFO.role}
        </motion.p>

        {/* Main Animated Headline */}
        <AnimatedText
          text="Building scalable, reliable software that solves real problems"
          className="hero-headline"
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
          style={{
            maxWidth: "680px",
            margin: "1.75rem auto 0",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
          }}
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
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.9rem",
            marginTop: "2.25rem",
          }}
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="btn btn-primary btn-lg"
          >
            <Code2 size={18} />
            <span>View Projects</span>
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="btn btn-secondary btn-lg"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </button>

          <a
            href={cvPdf}
            download="Abdullah_Radwan_CV.pdf"
            className="btn btn-outline btn-lg"
            style={{ textDecoration: "none" }}
          >
            <FileText size={18} />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>

      <style>{`
        .hero-headline {
          margin: 0;
          max-width: 950px;
          color: var(--text-primary);
          font-weight: 800;
          font-size: clamp(2.75rem, 6vw, 5rem);
          line-height: 1.08;
          letter-spacing: -0.045em;
        }

        @media (max-width: 640px) {
          .hero-headline {
            font-size: clamp(2.4rem, 12vw, 3.5rem);
          }
        }
      `}</style>
    </section>
  );
};
