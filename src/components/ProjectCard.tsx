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
      className={`bg-white rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-secondary/40 ${
        project.isFeatured
          ? "border-2 border-accent/30 shadow-md shadow-accent/5"
          : "border border-primary/10 shadow-sm"
      }`}
    >
      <div>
        {/* Project Image */}
        {imageUrl && (
          <div
            onClick={() => onOpenModal(project)}
            className="w-full rounded-lg overflow-hidden mb-5 border border-primary/10 bg-primary/5 aspect-video cursor-pointer group"
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
        <h3 className="text-xl font-bold text-primary mb-1.5">
          {project.title}
        </h3>
        <p className="text-sm text-accent font-semibold mb-3.5">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-[0.90625rem] text-primary/80 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Core Features bullets */}
        <div className="flex flex-col gap-1.5 mb-5">
          {project.features.slice(0, 3).map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 text-[0.8125rem] text-primary font-medium"
            >
              <CheckCircle2 size={14} className="text-accent shrink-0" />
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
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-semibold bg-primary/5 text-primary/80 border border-primary/10 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between border-t border-primary/10 pt-4">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-accent text-white hover:bg-highlight shadow-xs transition-all duration-200 hover:-translate-y-0.5"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-white border border-primary/10 text-primary hover:bg-primary/5 hover:border-secondary/40 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-semibold text-accent hover:text-highlight flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
