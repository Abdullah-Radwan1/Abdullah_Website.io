import React from "react";
import {
  Cpu,
  Layers,
  Zap,
  Target,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu size={22} className="text-bg-primary" />,
    Layers: <Layers size={22} className="text-palette-steel-blue" />,
    Zap: <Zap size={22} className="text-bg-primary" />,
    Target: <Target size={22} className="text-palette-navy" />,
    ShieldCheck: <ShieldCheck size={22} className="text-palette-steel-blue" />,
    GraduationCap: <GraduationCap size={22} className="text-palette-navy" />,
  };

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-[680px]">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-light border border-accent-border text-accent-primary text-[0.8125rem] font-semibold rounded-full uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-bold text-text-primary mb-3 leading-tight tracking-tight">
            Engineering Principles & Core Focus
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            A disciplined full-stack engineer dedicated to constructing
            production-grade applications with clean code, robust backend
            infrastructure, and high UX fidelity.
          </p>
        </div>

        {/* Detailed CV Text Overview & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Detailed Narrative */}
          <div className="bg-bg-primary border border-border-light rounded-3xl p-8 flex flex-col gap-4 shadow-xs">
            <h3 className="text-xl font-bold text-text-primary">
              Software Engineering Approach
            </h3>
            <h5 className="text-base font-bold text-text-primary mt-2">
              Engineering Mindset
            </h5>
            <p className="text-text-secondary leading-relaxed">
              I’m a software engineer focused on building reliable,
              maintainable, and adaptable systems. I care about understanding
              requirements clearly, designing thoughtful solutions, and creating
              software that remains easy to evolve.
            </p>
            <h5 className="text-base font-bold text-text-primary mt-2">
              Problem Solving
            </h5>
            <p className="text-text-secondary leading-relaxed">
              I approach complex problems with a structured, end-to-end
              mindset—from understanding the business need to designing and
              delivering practical solutions. I value clean code, clear
              communication, continuous learning, and strong engineering
              practices.
            </p>
          </div>

          {/* Key Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PERSONAL_INFO.aboutHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-bg-surface border border-border-light rounded-2xl p-5 flex flex-col gap-2.5 shadow-sm hover:shadow-md hover:border-palette-steel-blue/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-md bg-bg-secondary flex items-center justify-center border border-border-light">
                  {iconMap[highlight.icon]}
                </div>
                <h4 className="text-base font-bold text-text-primary">
                  {highlight.title}
                </h4>
                <p className="text-[0.8125rem] text-text-secondary leading-normal">
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
