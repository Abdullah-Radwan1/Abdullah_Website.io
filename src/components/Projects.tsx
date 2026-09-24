import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'saas' | 'web' | 'mobile'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === 'all') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="section-title-badge">Featured Projects</span>
            <h2 className="section-title">Production Software Systems</h2>
            <p className="section-subtitle">
              Full-stack applications engineered for performance, clean architecture, and practical real-world impact.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)',
              padding: '0.35rem',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'saas', label: 'AI & SaaS' },
              { id: 'web', label: 'Web Systems' },
              { id: 'mobile', label: 'Mobile Apps' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  backgroundColor: selectedFilter === tab.id ? 'var(--accent-primary)' : 'transparent',
                  color: selectedFilter === tab.id ? '#FFFFFF' : 'var(--text-secondary)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Projects */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}
          className="projects-grid"
        >
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

      <style>{`
        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
