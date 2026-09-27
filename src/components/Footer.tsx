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
    <footer className="bg-white border-t border-primary/10 pt-14 pb-8">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-10 border-b border-primary/10">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-primary/25">
                AR
              </div>
              <span className="text-lg font-bold text-primary">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm text-primary/80 leading-relaxed max-w-[380px]">
              {PERSONAL_INFO.headline}
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-secondary/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center text-secondary hover:bg-secondary/10 hover:border-secondary/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center text-accent hover:bg-accent/10 hover:border-accent/30 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[0.9375rem] font-bold text-primary mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#about"
                className="text-primary/80 hover:text-accent transition-colors"
              >
                About Engineering
              </a>
              <a
                href="#projects"
                className="text-primary/80 hover:text-accent transition-colors"
              >
                Featured Projects
              </a>
              <a
                href="#experience"
                className="text-primary/80 hover:text-accent transition-colors"
              >
                Career Timeline
              </a>
              <a
                href="#skills"
                className="text-primary/80 hover:text-accent transition-colors"
              >
                Technical Skills
              </a>
              <a
                href="#education"
                className="text-primary/80 hover:text-accent transition-colors"
              >
                Education & Languages
              </a>
              <a
                href="#contact"
                className="text-primary/80 hover:text-accent transition-colors"
              >
                Contact Info
              </a>
            </div>
          </div>

          {/* CV & Resources */}
          <div>
            <h4 className="text-[0.9375rem] font-bold text-primary mb-4">
              Resume & Documents
            </h4>
            <p className="text-sm text-primary/80 mb-4 leading-relaxed">
              Download or print Abdullah Radwan's official Curriculum Vitae
              (PDF).
            </p>
            <a
              href={cvPdf}
              download="Abdullah_Radwan_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-semibold border border-accent/30 text-accent hover:bg-accent/10 hover:text-highlight transition-all duration-200"
            >
              <FileText size={16} />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[0.8125rem] text-primary/65">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
            reserved.
          </div>

          <button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-1.5 text-accent hover:text-highlight font-semibold text-[0.8125rem] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
