import React, { useState } from "react";
import {
  Layers,
  Database,
  Cpu,
  Server,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const ArchitectureDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("nestjs-api");

  const nodes = [
    {
      id: "frontend-clients",
      title: "Frontend Tier",
      tech: "React 19 • Next.js • Angular • React Native",
      desc: "High-performance SPAs & SSR mobile interfaces with 95%+ Lighthouse rating & responsive state management (Redux/Zustand).",
      badge: "Client Layer",
      icon: Layers,
      color: "text-accent-primary",
    },
    {
      id: "nestjs-api",
      title: "NestJS REST & Gateway",
      tech: "NestJS • Node.js • TypeScript • JWT",
      desc: "Modular controllers, dependency injection, custom RBAC guards, and error handling middleware for enterprise reliability.",
      badge: "Core Service",
      icon: Server,
      color: "text-blue-600",
    },
    {
      id: "ai-engine",
      title: "AI Processing Engine",
      tech: "Open Router AI • Document Indexer",
      desc: "Automated PDF parsing, risk score evaluation, compliance checks, and quota metering.",
      badge: "SaaS AI Pipeline",
      icon: Cpu,
      color: "text-purple-600",
    },
    {
      id: "db-layer",
      title: "ORM & Data Persistence",
      tech: "PostgreSQL • Prisma • Drizzle • Neon DB",
      desc: "Type-safe SQL schema design, migrations, indexing, and real-time subscription sync (Convex & MongoDB).",
      badge: "Database Layer",
      icon: Database,
      color: "text-emerald-600",
    },
  ];

  const selected = nodes.find((n) => n.id === activeNode) || nodes[1];

  return (
    <div className="bg-white border border-border-light rounded-3xl p-7 shadow-lg relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <span className="text-[0.8125rem] font-mono font-semibold text-text-secondary">
            SYSTEM_ARCHITECTURE.v26.1
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.7rem] font-mono font-semibold bg-bg-secondary text-text-secondary border border-border-light">
            Clean Architecture
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.7rem] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Zap size={10} /> Active
          </span>
        </div>
      </div>

      {/* Nodes Connection Canvas Diagram */}
      <div className="grid grid-cols-2 gap-4 relative">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isActive = activeNode === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 flex flex-col gap-2 ${
                isActive
                  ? "bg-accent-light border-[1.5px] border-accent-primary shadow-[0_4px_12px_rgba(79,70,229,0.12)]"
                  : "bg-bg-primary border-[1.5px] border-border-light hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-8 h-8 rounded-md flex items-center justify-center shadow-xs ${
                    isActive
                      ? "bg-accent-primary text-white"
                      : `bg-white ${node.color}`
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span
                  className={`text-[0.7rem] font-mono font-semibold ${
                    isActive ? "text-accent-primary" : "text-text-muted"
                  }`}
                >
                  {node.badge}
                </span>
              </div>
              <h4 className="text-[0.9375rem] font-bold text-text-primary">
                {node.title}
              </h4>
              <p className="text-[0.78125rem] text-text-secondary font-mono">
                {node.tech}
              </p>
            </div>
          );
        })}
      </div>

      {/* Selected Node Inspector Detail Card */}
      <div className="mt-5 bg-bg-secondary border border-border-light rounded-lg p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-accent-primary" />
          <span className="text-[0.84375rem] font-bold text-text-primary">
            Architecture Strategy: {selected.title}
          </span>
        </div>
        <p className="text-[0.84375rem] text-text-secondary leading-normal">
          {selected.desc}
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-1">
          <div className="flex items-center gap-1 text-xs text-emerald-700 font-semibold">
            <CheckCircle2 size={13} /> Strict Typing
          </div>
          <div className="flex items-center gap-1 text-xs text-accent-primary font-semibold">
            <CheckCircle2 size={13} /> Zero Latency Overhead
          </div>
          <div className="flex items-center gap-1 text-xs text-text-muted font-semibold">
            <CheckCircle2 size={13} /> Modular Micro-services
          </div>
        </div>
      </div>
    </div>
  );
};
