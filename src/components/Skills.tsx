import React from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Layout, Database, Terminal, GitBranch, Check } from "lucide-react";

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Wrench: <Layout size={22} className="text-primary" />,
    Database: <Database size={22} className="text-secondary" />,
    Terminal: <Terminal size={22} className="text-primary" />,
    GitBranch: <GitBranch size={22} className="text-secondary" />,
  };

  return (
    <section id="skills" className="py-20 bg-primary/5 relative">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-[680px]">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 border border-accent/30 text-accent text-[0.8125rem] font-semibold rounded-full uppercase tracking-wider mb-4">
            Technical Stack
          </span>
          <h2 className="text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-bold text-primary mb-3 leading-tight tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-lg text-primary/65 leading-relaxed">
            A comprehensive overview of production technologies, databases,
            engineering practices, and developer tooling.
          </p>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-primary/10 rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-md bg-primary/5   flex items-center justify-center">
                  {iconMap[cat.iconName]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {cat.title}
                  </h3>
                  <p className="text-[0.8125rem] text-primary/65">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill Badges List */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-primary/10">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-primary/10 rounded-md text-sm font-semibold text-primary shadow-xs hover:border-accent/30 hover:text-accent transition-all duration-200"
                  >
                    <Check size={14} className="text-accent" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
