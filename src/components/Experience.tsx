import React from "react";
import { EXPERIENCES } from "../data/portfolioData";
import { Calendar, CheckCircle2, Building } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-[680px]">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-light border border-accent-border text-accent-primary text-[0.8125rem] font-semibold rounded-full uppercase tracking-wider mb-4">
            Career Track
          </span>
          <h2 className="text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-bold text-text-primary mb-3 leading-tight tracking-tight">
            Engineering Experience
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Structured development programs and hands-on full-stack training
            delivering production software and technical leadership.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-[860px] mx-auto pl-8">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[7px] w-0.5 bg-border-light z-0" />

          <div className="flex flex-col gap-10">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative z-10">
                {/* Node Bullet Dot */}
                <div className="absolute top-1.5 -left-8 w-4 h-4 rounded-full bg-white border-[3px] border-accent-primary ring-4 ring-accent-light" />

                {/* Content Card */}
                <div className="bg-bg-surface border border-border-light rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                  {/* Card Top Row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border-light pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-accent-primary font-semibold text-[0.9375rem] mt-1">
                        <Building size={16} />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold bg-bg-secondary px-3 py-1 rounded-full border border-border-light text-text-secondary">
                      <Calendar size={14} className="text-accent-primary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="flex flex-col gap-2">
                    {exp.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm text-text-primary leading-normal"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-accent-primary mt-0.5 shrink-0"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-semibold bg-bg-secondary text-text-secondary border border-border-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
