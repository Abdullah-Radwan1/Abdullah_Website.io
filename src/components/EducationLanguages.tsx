import React from 'react';
import { EDUCATION, LANGUAGES } from '../data/portfolioData';
import { GraduationCap, Award, Globe, Calendar } from 'lucide-react';

export const EducationLanguages: React.FC = () => {
  return (
    <section id="education" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2.5rem'
          }}
          className="edu-lang-grid"
        >
          {/* Education Card */}
          <div>
            <div className="section-header" style={{ marginBottom: '1.5rem' }}>
              <span className="section-title-badge">Academic Background</span>
              <h2 className="section-title">Education</h2>
            </div>

            <div
              className="card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      border: '1px solid var(--accent-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-primary)'
                    }}
                  >
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {EDUCATION.degree}
                    </h3>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
                      {EDUCATION.institution}
                    </p>
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
                  <span>{EDUCATION.period}</span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-light)',
                  flexWrap: 'wrap'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.85rem',
                    backgroundColor: 'var(--success-bg)',
                    color: 'var(--success-text)',
                    border: '1px solid var(--success-border)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem',
                    fontWeight: 700
                  }}
                >
                  <Award size={16} />
                  <span>{EDUCATION.honors}</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.85rem',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem',
                    fontWeight: 700
                  }}
                >
                  <span>Academic Rating:</span>
                  <span style={{ color: 'var(--accent-primary)' }}>{EDUCATION.gpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div>
            <div className="section-header" style={{ marginBottom: '1.5rem' }}>
              <span className="section-title-badge">Communication</span>
              <h2 className="section-title">Languages</h2>
            </div>

            <div
              className="card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.language}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                        fontWeight: 700,
                        fontSize: '0.875rem'
                      }}
                    >
                      <Globe size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {lang.language}
                      </h4>
                      <p style={{ fontSize: '0.78125rem', color: 'var(--text-muted)' }}>
                        {lang.level}
                      </p>
                    </div>
                  </div>

                  <span
                    style={{
                      padding: '0.3rem 0.75rem',
                      backgroundColor: lang.proficiency === 'Fluent' ? 'var(--accent-light)' : 'var(--bg-secondary)',
                      color: lang.proficiency === 'Fluent' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      border: `1px solid ${lang.proficiency === 'Fluent' ? 'var(--accent-border)' : 'var(--border-light)'}`,
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8125rem',
                      fontWeight: 700
                    }}
                  >
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .edu-lang-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
