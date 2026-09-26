import React from "react";
import { X, ExternalLink, CheckCircle2, Zap } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-palette-navy/70 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-white border border-border-light rounded-3xl max-w-[780px] w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-bg-secondary border border-border-light flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Top Badges */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-palette-light-blue/40 text-palette-navy border border-palette-steel-blue/30">
            <Zap size={12} /> {project.date}
          </span>
          {project.isFeatured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-accent-light text-accent-primary border border-accent-border">
              ★ Featured Flagship System
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-1.5">
          {project.title}
        </h2>
        <p className="text-base text-accent-primary font-semibold mb-5">
          {project.subtitle}
        </p>

        {/* Project Screenshot in Modal */}
        {project.image && (
          <div className="w-full rounded-xl overflow-hidden mb-6 border border-border-light bg-bg-secondary aspect-video">
            <img
              src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
              alt={project.title}
              className="w-full h-full object-cover block"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-text-primary mb-2">
            System Description & Overview
          </h4>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Core Features List */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-text-primary mb-3">
            Key Implemented Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 bg-bg-primary rounded-md border border-border-light text-sm text-text-primary font-medium"
              >
                <CheckCircle2
                  size={16}
                  className="text-accent-primary mt-0.5 shrink-0"
                />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Notes */}
        {project.architectureNotes && (
          <div className="mb-6">
            <h4 className="text-sm font-bold text-text-primary mb-2">
              Architecture & Engineering Implementation
            </h4>
            <div className="bg-palette-navy text-palette-cream p-4 rounded-xl font-mono text-xs sm:text-sm">
              <div className="text-palette-light-blue mb-2 font-semibold">
                // Engineering Strategy Highlights
              </div>
              {project.architectureNotes.map((note, i) => (
                <div key={i} className="mb-1 leading-relaxed">
                  ➜ {note}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Badges */}
        <div className="mb-7">
          <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2.5">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-bg-secondary text-text-secondary border border-border-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="flex flex-wrap items-center justify-between pt-5 border-t border-border-light gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold bg-accent-primary text-white hover:bg-accent-hover shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold bg-bg-surface border border-border-light text-text-primary hover:bg-bg-secondary hover:border-palette-steel-blue/40 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon size={16} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm font-semibold border border-accent-border text-accent-primary hover:bg-accent-light transition-all duration-200 cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
