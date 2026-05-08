import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const footerLinks = [
  { labelKey: "nav.inicio" as const, href: "#inicio" },
  { labelKey: "nav.sobre" as const, href: "#sobre-mi" },
  { labelKey: "nav.skills" as const, href: "#skills" },
  { labelKey: "nav.proyectos" as const, href: "#proyectos" },
  { labelKey: "nav.contacto" as const, href: "#contacto" },
];

const socials = [
  { icon: Github, href: "https://github.com/Hung-Nicolas", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nicolas-hung-600554401/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nicohung.trabajo@gmail.com", label: "Email" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#111113] border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-mono font-semibold text-[#f5f5f7] text-sm">
              Nicolás
            </span>
            <span className="text-xs text-[#5a5a63]">Buenos Aires, Argentina</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(link.href);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 64;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="text-sm text-[#8a8a93] hover:text-[#f5f5f7] transition-colors duration-200"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#8a8a93] hover:text-[#f5f5f7] transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-[#5a5a63]">
            &copy; 2026 {t("footer.copy")}
          </p>
          <p className="text-xs text-[#5a5a63]">
            {t("footer.issue")}
          </p>
        </div>

        {/* Closing phrase */}
        <p className="text-center text-xs text-[#5a5a63] mt-8">
          {t("footer.tagline")}
        </p>
      </div>
    </footer>
  );
}
