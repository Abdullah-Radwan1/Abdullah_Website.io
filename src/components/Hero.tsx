import React from 'react';
import { Mail, FileText, Code2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        paddingTop: 'calc(var(--header-height) + 3rem)',
        paddingBottom: '5rem',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Gradient Blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, rgba(250, 250, 252, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.35rem 0.85rem',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-xs)',
                width: 'fit-content'
              }}
            >
              <span className="pulse-dot" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Available for Software Engineering Roles
              </span>
            </div>

            {/* Candidate Title & Name */}
            <div>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}
              >
                {PERSONAL_INFO.role}
              </p>
              <h1
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15
                }}
              >
                {PERSONAL_INFO.headline}
              </h1>
            </div>

            {/* Professional Summary from CV */}
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '620px'
              }}
            >
              {PERSONAL_INFO.summary}
            </p>

            {/* Engineering Highlights Quick List */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                margin: '0.5rem 0'
              }}
            >
              {['TypeScript & NestJS', 'React / Next.js / Angular', 'Clean SaaS Architecture', 'Database & ORM Design'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '0.75rem'
              }}
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="btn btn-primary btn-lg"
              >
                <Code2 size={18} />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="btn btn-secondary btn-lg"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenCvModal}
                className="btn btn-outline btn-lg"
              >
                <FileText size={18} />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Hero Right Visual: Technical Architecture Canvas */}
          <div>
            <ArchitectureDiagram />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
