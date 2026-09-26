import React, { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "../types";

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "saas" | "web" | "mobile"
  >("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    null,
  );

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === "all") return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 bg-bg-primary relative">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between mb-10 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-light border border-accent-border text-accent-primary text-[0.8125rem] font-semibold rounded-full uppercase tracking-wider mb-4">
              Featured Projects
            </span>
            <h2 className="text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-bold text-text-primary mb-3 leading-tight tracking-tight">
              Production Software Systems
            </h2>
            <p className="text-lg text-text-muted leading-relaxed max-w-xl">
              Full-stack applications engineered for performance, clean
              architecture, and practical real-world impact.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-white border border-border-light rounded-full p-1.5 shadow-xs">
            {[
              { id: "all", label: "All Projects" },
              { id: "saas", label: "AI & SaaS" },
              { id: "web", label: "Web Systems" },
              { id: "mobile", label: "Mobile Apps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-[0.8125rem] font-semibold transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab.id
                    ? "bg-accent-primary text-white shadow-xs"
                    : "bg-transparent text-text-secondary hover:text-text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Inspector Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
