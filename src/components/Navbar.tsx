import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ChevronRight } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import cvPdf from "../assets/AbdullahCV.pdf";

interface NavbarProps {
  onOpenCvModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = [
        "home",
        "about",
        "projects",
        "experience",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-white/90 border-b border-primary/10 shadow-sm"
          : "bg-white/80 border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 text-primary font-bold text-lg tracking-tight group"
        >
          <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-primary/25 transition-transform duration-200 group-hover:scale-105">
            AR
          </div>
          <div className="flex flex-col">
            <span className="leading-tight">{PERSONAL_INFO.name}</span>
            <span className="text-[0.725rem] font-medium text-primary/65 leading-tight">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 bg-primary/5 px-2.5 py-1.5 rounded-full border border-primary/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-accent bg-white shadow-xs"
                    : "text-primary/80 hover:text-primary bg-transparent"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Download CV */}
        <div className="flex items-center gap-3">
          <a
            href={cvPdf}
            download="Abdullah_Radwan_CV.pdf"
            className="inline-flex items-center gap-1.5 font-semibold text-sm px-3.5 py-2 rounded-md border border-primary/10 bg-white hover:bg-primary/5 text-primary shadow-xs transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Download CV"
          >
            <FileText size={16} className="text-accent" />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md border border-primary/10 bg-white text-primary hover:bg-primary/5 transition-colors"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-primary/10 shadow-lg p-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between p-3 rounded-md text-primary font-semibold text-sm bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <span>{link.name}</span>
              <ChevronRight size={16} className="text-primary/65" />
            </a>
          ))}
          <a
            href={cvPdf}
            download="Abdullah_Radwan_CV.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-md font-semibold text-white bg-accent hover:bg-highlight shadow-sm transition-all duration-200"
          >
            <FileText size={16} />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
};
