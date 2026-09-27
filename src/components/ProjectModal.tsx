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
      className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-white border border-primary/10 rounded-3xl max-w-[780px] w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary/80 hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Top Badges */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-secondary/15 text-primary border border-secondary/30">
            <Zap size={12} /> {project.date}
          </span>
          {project.isFeatured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/30">
              ★ Featured Flagship System
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-1.5">
          {project.title}
        </h2>
        <p className="text-base text-accent font-semibold mb-5">
          {project.subtitle}
        </p>

        {/* Project Screenshot in Modal */}
        {project.image && (
          <div className="w-full rounded-xl overflow-hidden mb-6 border border-primary/10 bg-primary/5 aspect-video">
            <img
              src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
              alt={project.title}
              className="w-full h-full object-cover block"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-primary mb-2">
            System Description & Overview
          </h4>
          <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Core Features List */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-primary mb-3">
            Key Implemented Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 bg-primary/5 rounded-md border border-primary/10 text-sm text-primary font-medium"
              >
                <CheckCircle2
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Notes */}
        {project.architectureNotes && (
          <div className="mb-6">
            <h4 className="text-sm font-bold text-primary mb-2">
              Architecture & Engineering Implementation
            </h4>
            <div className="bg-primary text-white p-4 rounded-xl font-mono text-xs sm:text-sm">
              <div className="text-secondary mb-2 font-semibold">
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
          <h4 className="text-xs font-bold text-primary/65 uppercase tracking-wider mb-2.5">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/5 text-primary/80 border border-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="flex flex-wrap items-center justify-between pt-5 border-t border-primary/10 gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold bg-accent text-white hover:bg-highlight shadow-sm transition-all duration-200 hover:-translate-y-0.5"
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold bg-white border border-primary/10 text-primary hover:bg-primary/5 hover:border-secondary/40 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon size={16} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm font-semibold border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
