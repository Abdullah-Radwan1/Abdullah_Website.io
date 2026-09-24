import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Database, Terminal, GitBranch, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout size={22} style={{ color: 'var(--accent-primary)' }} />,
    Database: <Database size={22} style={{ color: '#2563EB' }} />,
    Terminal: <Terminal size={22} style={{ color: '#7C3AED' }} />,
    GitBranch: <GitBranch size={22} style={{ color: '#059669' }} />
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-title-badge">Technical Stack</span>
          <h2 className="section-title">Skills & Competencies</h2>
          <p className="section-subtitle">
            A comprehensive overview of production technologies, databases, engineering practices, and developer tooling.
          </p>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.75rem'
          }}
          className="skills-grid"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {iconMap[cat.iconName]}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill Badges List */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid var(--border-light)'
                }}
              >
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.45rem 0.85rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      boxShadow: 'var(--shadow-xs)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Check size={14} style={{ color: 'var(--accent-primary)' }} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
