import React from "react";
import { EDUCATION, LANGUAGES } from "../data/portfolioData";
import { GraduationCap, Award, Globe, Calendar } from "lucide-react";

export const EducationLanguages: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white relative">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
          {/* Education Card */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 border border-accent/30 text-accent text-[0.8125rem] font-semibold rounded-full uppercase tracking-wider mb-4">
                Academic Background
              </span>
              <h2 className="text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-bold text-primary leading-tight tracking-tight">
                Education
              </h2>
            </div>

            <div className="bg-white border border-primary/10 rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-200">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {EDUCATION.degree}
                    </h3>
                    <p className="text-base font-semibold text-accent">
                      {EDUCATION.institution}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10 text-primary/80">
                  <Calendar size={14} className="text-accent" />
                  <span>{EDUCATION.period}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-primary/10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-secondary/15 text-primary border border-secondary/30 rounded-full text-sm font-bold">
                  <Award size={16} />
                  <span>{EDUCATION.honors}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/5 text-primary border border-primary/10 rounded-full text-sm font-bold">
                  <span>Academic Rating:</span>
                  <span className="text-accent">{EDUCATION.gpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 border border-accent/30 text-accent text-[0.8125rem] font-semibold rounded-full uppercase tracking-wider mb-4">
                Communication
              </span>
              <h2 className="text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-bold text-primary leading-tight tracking-tight">
                Languages
              </h2>
            </div>

            <div className="bg-white border border-primary/10 rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-200">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center justify-between p-4 bg-primary/5 border border-primary/10 rounded-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white border border-primary/10 flex items-center justify-center text-accent font-bold text-sm">
                      <Globe size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-primary">
                        {lang.language}
                      </h4>
                      <p className="text-[0.78125rem] text-primary/65">
                        {lang.level}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 text-[0.8125rem] font-bold rounded-full border ${
                      lang.proficiency === "Fluent"
                        ? "bg-accent/10 text-accent border-accent/30"
                        : "bg-primary/5 text-primary/80 border-primary/10"
                    }`}
                  >
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
