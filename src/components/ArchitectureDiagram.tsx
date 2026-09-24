import React, { useState } from 'react';
import { Layers, Database, Cpu, Server, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('nestjs-api');

  const nodes = [
    {
      id: 'frontend-clients',
      title: 'Frontend Tier',
      tech: 'React 19 • Next.js • Angular • React Native',
      desc: 'High-performance SPAs & SSR mobile interfaces with 95%+ Lighthouse rating & responsive state management (Redux/Zustand).',
      badge: 'Client Layer',
      icon: Layers,
      color: '#4F46E5'
    },
    {
      id: 'nestjs-api',
      title: 'NestJS REST & Gateway',
      tech: 'NestJS • Node.js • TypeScript • JWT',
      desc: 'Modular controllers, dependency injection, custom RBAC guards, and error handling middleware for enterprise reliability.',
      badge: 'Core Service',
      icon: Server,
      color: '#2563EB'
    },
    {
      id: 'ai-engine',
      title: 'AI Processing Engine',
      tech: 'Open Router AI • Document Indexer',
      desc: 'Automated PDF parsing, risk score evaluation, compliance checks, and quota metering.',
      badge: 'SaaS AI Pipeline',
      icon: Cpu,
      color: '#7C3AED'
    },
    {
      id: 'db-layer',
      title: 'ORM & Data Persistence',
      tech: 'PostgreSQL • Prisma • Drizzle • Neon DB',
      desc: 'Type-safe SQL schema design, migrations, indexing, and real-time subscription sync (Convex & MongoDB).',
      badge: 'Database Layer',
      icon: Database,
      color: '#059669'
    }
  ];

  const selected = nodes.find(n => n.id === activeNode) || nodes[1];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem',
        boxShadow: 'var(--shadow-lg), 0 1px 3px rgba(15,23,42,0.02)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Visual Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 10px rgba(16,185,129,0.5)'
            }}
          />
          <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-secondary)' }}>
            SYSTEM_ARCHITECTURE.v26.1
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span className="badge badge-tech" style={{ fontSize: '0.7rem' }}>
            Clean Architecture
          </span>
          <span className="badge badge-live" style={{ fontSize: '0.7rem' }}>
            <Zap size={10} /> Active
          </span>
        </div>
      </div>

      {/* Nodes Connection Canvas Diagram */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          position: 'relative'
        }}
      >
        {nodes.map((node) => {
          const Icon = node.icon;
          const isActive = activeNode === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              style={{
                backgroundColor: isActive ? 'var(--accent-light)' : 'var(--bg-primary)',
                border: `1.5px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-light)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                boxShadow: isActive ? '0 4px 12px rgba(79, 70, 229, 0.12)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isActive ? 'var(--accent-primary)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : node.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <Icon size={16} />
                </div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)'
                  }}
                >
                  {node.badge}
                </span>
              </div>
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {node.title}
              </h4>
              <p style={{ fontSize: '0.78125rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                {node.tech}
              </p>
            </div>
          );
        })}
      </div>

      {/* Selected Node Inspector Detail Card */}
      <div
        style={{
          marginTop: '1.25rem',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={16} style={{ color: 'var(--accent-primary)' }} />
          <span style={{ fontSize: '0.84375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Architecture Strategy: {selected.title}
          </span>
        </div>
        <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {selected.desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--success-text)', fontWeight: 600 }}>
            <CheckCircle2 size={13} /> Strict Typing
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            <CheckCircle2 size={13} /> Zero Latency Overhead
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            <CheckCircle2 size={13} /> Modular Micro-services
          </div>
        </div>
      </div>
    </div>
  );
};
