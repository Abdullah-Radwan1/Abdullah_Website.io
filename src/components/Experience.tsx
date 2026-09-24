import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, CheckCircle2, Building } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-title-badge">Career Track</span>
          <h2 className="section-title">Engineering Experience</h2>
          <p className="section-subtitle">
            Structured development programs and hands-on full-stack training delivering production software and technical leadership.
          </p>
        </div>

        {/* Timeline Layout */}
        <div
          style={{
            position: 'relative',
            maxWidth: '860px',
            margin: '0 auto',
            paddingLeft: '2rem'
          }}
          className="timeline-container"
        >
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '7px',
              width: '2px',
              backgroundColor: 'var(--border-light)',
              zIndex: 0
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                style={{
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Node Bullet Dot */}
                <div
                  style={{
                    position: 'absolute',
                    top: '6px',
                    left: '-2rem',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '3px solid var(--accent-primary)',
                    boxShadow: '0 0 0 4px var(--accent-light)'
                  }}
                />

                {/* Content Card */}
                <div
                  className="card"
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  {/* Card Top Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      borderBottom: '1px solid var(--border-light)',
                      paddingBottom: '1rem'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9375rem', marginTop: '0.25rem' }}>
                        <Building size={16} />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <Calendar size={14} style={{ color: 'var(--accent-primary)' }} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {exp.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-primary)',
                          lineHeight: 1.5
                        }}
                      >
                        <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="badge badge-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
