import React from "react";
import { ArrowUp, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";
import cvPdf from "../assets/AbdullahCV.pdf";

interface FooterProps {
  onOpenCvModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-border-light pt-14 pb-8">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-10 border-b border-border-light">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-accent-primary to-blue-500 text-white flex items-center justify-center font-extrabold text-sm shadow-[0_4px_10px_rgba(79,70,229,0.25)]">
                AR
              </div>
              <span className="text-lg font-bold text-text-primary">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed max-w-[380px]">
              {PERSONAL_INFO.headline}
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-bg-secondary border border-border-light flex items-center justify-center text-text-primary hover:bg-bg-tertiary hover:border-slate-300 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-bg-secondary border border-border-light flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-md bg-bg-secondary border border-border-light flex items-center justify-center text-accent-primary hover:bg-accent-light hover:border-accent-border transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[0.9375rem] font-bold text-text-primary mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#about"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                About Engineering
              </a>
              <a
                href="#projects"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                Featured Projects
              </a>
              <a
                href="#experience"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                Career Timeline
              </a>
              <a
                href="#skills"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                Technical Skills
              </a>
              <a
                href="#education"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                Education & Languages
              </a>
              <a
                href="#contact"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                Contact Info
              </a>
            </div>
          </div>

          {/* CV & Resources */}
          <div>
            <h4 className="text-[0.9375rem] font-bold text-text-primary mb-4">
              Resume & Documents
            </h4>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Download or print Abdullah Radwan's official Curriculum Vitae
              (PDF).
            </p>
            <a
              href={cvPdf}
              download="Abdullah_Radwan_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-semibold border border-accent-border text-accent-primary hover:bg-accent-light hover:text-accent-hover transition-all duration-200"
            >
              <FileText size={16} />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[0.8125rem] text-text-muted">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
            reserved.
          </div>

          <button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-1.5 text-accent-primary hover:text-accent-hover font-semibold text-[0.8125rem] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
