import React from "react";
import { ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenModal,
}) => {
  const imageUrl = project.image
    ? `${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`
    : "";

  return (
    <div
      className={`bg-bg-surface rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 ${
        project.isFeatured
          ? "border-2 border-accent-border shadow-md shadow-accent-primary/5"
          : "border border-border-light shadow-sm"
      }`}
    >
      <div>
        {/* Project Image */}
        {imageUrl && (
          <div
            onClick={() => onOpenModal(project)}
            className="w-full rounded-lg overflow-hidden mb-5 border border-border-light bg-bg-secondary aspect-video cursor-pointer group"
          >
            <img
              src={imageUrl}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-text-primary mb-1.5">
          {project.title}
        </h3>
        <p className="text-sm text-accent-primary font-semibold mb-3.5">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-[0.90625rem] text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Core Features bullets */}
        <div className="flex flex-col gap-1.5 mb-5">
          {project.features.slice(0, 3).map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 text-[0.8125rem] text-text-primary font-medium"
            >
              <CheckCircle2 size={14} className="text-accent-primary shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-semibold bg-bg-secondary text-text-secondary border border-border-light hover:bg-accent-light hover:text-accent-primary hover:border-accent-border transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between border-t border-border-light pt-4">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-accent-primary text-white hover:bg-accent-hover shadow-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <ExternalLink size={14} />
                <span>Live Project</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-bg-surface border border-border-light text-text-primary hover:bg-bg-secondary hover:border-slate-300 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-semibold text-accent-primary hover:text-accent-hover flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
