import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { labelKey: "nav.inicio" as const, href: "#inicio" },
  { labelKey: "nav.sobre" as const, href: "#sobre-mi" },
  { labelKey: "nav.skills" as const, href: "#skills" },
  { labelKey: "nav.proyectos" as const, href: "#proyectos" },
  { labelKey: "nav.contacto" as const, href: "#contacto" },
];

const sectionIds = ["inicio", "sobre-mi", "skills", "proyectos", "contacto"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="flex flex-col"
          >
            <span className="font-mono font-semibold text-[#f5f5f7] text-sm tracking-tight">
              Nico
            </span>
            <span className="text-[0.65rem] text-[#5a5a63] leading-none">
              Full Stack · n8n Automation
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative text-sm font-medium transition-colors duration-200 group py-1 ${
                    isActive ? "text-[#f5f5f7]" : "text-[#8a8a93] hover:text-[#f5f5f7]"
                  }`}
                >
                  {t(link.labelKey)}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#EA4B71] transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right: Lang + CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-sm font-medium text-[#8a8a93] hover:text-[#f5f5f7] border border-white/[0.06] hover:border-white/[0.12] px-3 py-1.5 rounded-full transition-all duration-200"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-mono text-xs">{lang === "es" ? "ES" : "EN"}</span>
            </button>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contacto");
              }}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white bg-[#EA4B71] hover:brightness-110 px-4 py-2 rounded-full transition-all duration-200 shadow-glow"
            >
              {t("nav.cta")}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#f5f5f7] p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0b]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-xl font-medium text-[#8a8a93] hover:text-[#f5f5f7] transition-colors duration-200"
            >
              {t(link.labelKey)}
            </a>
          ))}

          <button
            onClick={() => {
              toggleLang();
              setMobileOpen(false);
            }}
            className="flex items-center gap-2 text-base font-medium text-[#8a8a93] hover:text-[#f5f5f7] transition-colors duration-200"
          >
            <Globe className="w-4 h-4" />
            {lang === "es" ? "Switch to English" : "Cambiar a Español"}
          </button>

          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contacto");
            }}
            className="mt-4 inline-flex items-center gap-2 text-base font-medium text-white bg-[#EA4B71] hover:brightness-110 px-6 py-3 rounded-full transition-all duration-200"
          >
            {t("nav.cta")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </>
  );
}
