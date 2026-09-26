import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_CATEGORIES, EDUCATION, LANGUAGES } from '../data/portfolioData';
import cvPdf from '../assets/AbdullahCV.pdf';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextCv = () => {
    const cvText = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email} | LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.summary}

EXPERIENCE:
${EXPERIENCES.map(e => `
- ${e.role} | ${e.organization} (${e.period})
  ${e.description}
  Highlights: ${e.highlights.join('; ')}
  Tech: ${e.technologies.join(', ')}
`).join('\n')}

FEATURED PROJECTS:
${PROJECTS.map(p => `
- ${p.title} (${p.date})
  ${p.description}
  Tech: ${p.technologies.join(', ')}
`).join('\n')}

SKILLS:
${SKILL_CATEGORIES.map(s => `${s.title}: ${s.skills.join(', ')}`).join('\n')}

EDUCATION:
${EDUCATION.degree} — ${EDUCATION.institution} (${EDUCATION.period})
${EDUCATION.honors}, ${EDUCATION.gpa}

LANGUAGES:
${LANGUAGES.map(l => `${l.language} (${l.proficiency})`).join(', ')}
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 300,
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '840px',
          width: '100%',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div
          style={{
            padding: '1rem 1.5rem',
            backgroundColor: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={20} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a
              href={cvPdf}
              download="Abdullah_Radwan_CV.pdf"
              className="btn btn-primary btn-sm"
              title="Download Original PDF"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none'
              }}
            >
              <FileText size={16} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="btn btn-secondary btn-sm"
              title="Print CV Document"
            >
              <Printer size={16} />
              <span>Print</span>
            </button>

            <button
              onClick={handleCopyTextCv}
              className="btn btn-outline btn-sm"
              title="Copy Text CV"
            >
              {copied ? <Check size={16} style={{ color: 'var(--success-text)' }} /> : <Copy size={16} />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)'
              }}
              aria-label="Close CV Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Formatted CV Document Body */}
        <div
          id="printable-cv"
          style={{
            padding: '2.5rem',
            overflowY: 'auto',
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-primary)',
            lineHeight: 1.6
          }}
        >
          {/* Document Header */}
          <div style={{ borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              {PERSONAL_INFO.name}
            </h1>
            <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>
              {PERSONAL_INFO.role}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <span>✉ {PERSONAL_INFO.email}</span>
              <span>🔗 github.com/abdullah-radwan</span>
              <span>🔗 linkedin.com/in/abdullah-radwan</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Experience & Professional Training
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{exp.role}</strong>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{exp.period}</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '0.35rem' }}>
                    {exp.organization}
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} style={{ marginBottom: '0.25rem' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Key Software Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{proj.title}</strong>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{proj.date}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{proj.description}</p>
                  <div style={{ fontSize: '0.78125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontSize: '0.875rem' }}>
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <strong style={{ color: 'var(--text-primary)' }}>{cat.title}:</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>{cat.skills.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
            <div>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                Education
              </h3>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>{EDUCATION.degree}</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{EDUCATION.institution} ({EDUCATION.period})</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--success-text)', fontWeight: 600 }}>{EDUCATION.honors} — {EDUCATION.gpa}</div>
            </div>

            <div>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                Languages
              </h3>
              {LANGUAGES.map((l) => (
                <div key={l.language} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <strong>{l.language}:</strong> {l.proficiency} ({l.level})
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
