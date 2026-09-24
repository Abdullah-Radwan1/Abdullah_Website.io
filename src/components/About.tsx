import React from 'react';
import { Cpu, Layers, Zap, Target, ShieldCheck, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu size={22} style={{ color: 'var(--accent-primary)' }} />,
    Layers: <Layers size={22} style={{ color: '#2563EB' }} />,
    Zap: <Zap size={22} style={{ color: '#D97706' }} />,
    Target: <Target size={22} style={{ color: '#DC2626' }} />,
    ShieldCheck: <ShieldCheck size={22} style={{ color: '#059669' }} />,
    GraduationCap: <GraduationCap size={22} style={{ color: '#7C3AED' }} />
  };

  return (
    <section id="about" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-title-badge">About Me</span>
          <h2 className="section-title">Engineering Principles & Core Focus</h2>
          <p className="section-subtitle">
            A disciplined full-stack engineer dedicated to constructing production-grade applications with clean code, robust backend infrastructure, and high UX fidelity.
          </p>
        </div>

        {/* Detailed CV Text Overview & Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
          className="about-grid"
        >
          {/* Detailed Narrative */}
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Software Engineering Approach
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              My engineering philosophy revolves around building systems that are not only performant today, but maintainable and adaptable for tomorrow. From authoring structured BRD/PRD specifications to implementing testable NestJS REST microservices and reactive React/Angular interfaces, I take pride in end-to-end craftsmanship.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              With expertise spanning relational & document databases (PostgreSQL, MongoDB), type-safe ORMs (Prisma, Drizzle), and AI integration (Open Router AI), I solve complex domain problems using modern technical tools without sacrificing code readability or architectural discipline.
            </p>

            <div
              style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Location</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>Cairo, Egypt</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Specialization</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--accent-primary)' }}>TypeScript Ecosystem</span>
              </div>
            </div>
          </div>

          {/* 6 Key Highlight Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem'
            }}
            className="highlight-grid"
          >
            {PERSONAL_INFO.aboutHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  {iconMap[highlight.icon]}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {highlight.title}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .highlight-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
