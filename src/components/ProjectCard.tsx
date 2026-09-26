import React from 'react';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const imageUrl = project.image
    ? `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`
    : '';

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.75rem',
        border: project.isFeatured ? '2px solid var(--accent-border)' : '1px solid var(--border-light)',
        boxShadow: project.isFeatured ? 'var(--shadow-md), 0 0 20px rgba(79, 70, 229, 0.08)' : 'var(--shadow-sm)'
      }}
    >
      <div>
        {/* Project Image */}
        {imageUrl && (
          <div
            onClick={() => onOpenModal(project)}
            style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginBottom: '1.25rem',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-secondary)',
              aspectRatio: '16 / 9',
              cursor: 'pointer',
            }}
          >
            <img
              src={imageUrl}
              alt={project.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        )}

        {/* Title & Subtitle */}
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.85rem' }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p style={{ fontSize: '0.90625rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Core Features bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technologies Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
          {project.technologies.map((tech) => (
            <span key={tech} className="badge badge-tech">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
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
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            style={{
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            <span>Details</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
