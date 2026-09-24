import React from 'react';
import { ExternalLink, Zap, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  // Visual UI Mockup tailored for each project
  const renderVisualPreview = () => {
    switch (project.id) {
      case 'docky-ai':
        return (
          <div
            style={{
              backgroundColor: '#0F172A',
              color: '#F8FAFC',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              fontFamily: 'var(--font-sans)',
              border: '1px solid #334155',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1E293B', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>Docky AI SaaS Engine</span>
              </div>
              <span style={{ fontSize: '0.7rem', backgroundColor: '#312E81', color: '#A5B4FC', padding: '0.15rem 0.45rem', borderRadius: '4px', fontWeight: 600 }}>
                OpenRouter AI Connected
              </span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '0.75rem', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#1E293B', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #334155' }}>
                <div style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Contract Risk Assessment
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10B981' }}>
                  94.8% Compliance
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                  ✓ 14 Clauses Analyzed • 0 High Risks
                </div>
              </div>

              <div style={{ backgroundColor: '#1E293B', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #334155' }}>
                <div style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 600, marginBottom: '0.25rem' }}>
                  SaaS Quotas
                </div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#818CF8' }}>
                  48 / 100 PDFs
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                  Pro Tier Subscribed
                </div>
              </div>
            </div>
          </div>
        );

      case 'apex-pm':
        return (
          <div
            style={{
              backgroundColor: '#FAFAFC',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              border: '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <Layers size={14} style={{ color: 'var(--accent-primary)' }} />
                <span>APEX Sprint Workspace</span>
              </div>
              <span className="badge badge-live" style={{ fontSize: '0.65rem' }}>RBAC Active</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              {['Backlog (4)', 'In Progress (2)', 'Completed (12)'].map((col, idx) => (
                <div key={idx} style={{ backgroundColor: '#FFFFFF', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-light)', fontSize: '0.725rem', fontWeight: 600 }}>
                  <div style={{ color: 'var(--text-muted)', marginBottom: '0.35rem' }}>{col}</div>
                  <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '0.35rem', borderRadius: '4px', fontSize: '0.675rem', color: 'var(--text-primary)' }}>
                    Task #{idx + 101}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              border: '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-primary)' }}>
                {project.technologies.slice(0, 3).join(' • ')}
              </span>
              <span className="badge badge-live" style={{ fontSize: '0.65rem' }}>Verified Build</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.metrics?.map((m) => (
                <span key={m} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.725rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  ✓ {m}
                </span>
              ))}
            </div>
          </div>
        );
    }
  };

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
        {/* Header Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span className="badge badge-live">
            <Zap size={12} /> {project.date}
          </span>
          {project.isFeatured && (
            <span className="badge" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', border: '1px solid var(--accent-border)' }}>
              ★ Featured SaaS Project
            </span>
          )}
        </div>

        {/* Visual Preview Banner */}
        <div style={{ marginBottom: '1.25rem' }}>
          {renderVisualPreview()}
        </div>

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
