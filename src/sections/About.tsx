import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { Download, GraduationCap, User } from "lucide-react";

export function About() {
  const { t, lang } = useLanguage();

  const schoolText =
    lang === "es"
      ? {
          year: "2020 – 2026",
          school: "ETN35DE18",
          fullName: "Escuela Técnica Ingeniero Eduardo Latzina",
          degree: "Técnico en computación",
        }
      : {
          year: "2020 – 2026",
          school: "ETN35DE18",
          fullName: "Escuela Técnica Ingeniero Eduardo Latzina",
          degree: "Computing Technician",
        };

  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-[#111113]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs text-[#EA4B71] tracking-[0.1em] mb-4 block">
            {t("about.label")}
          </span>
          <h2 className="flex items-center gap-3 text-[clamp(2rem,4vw,3rem)] font-semibold text-[#f5f5f7] tracking-[-0.02em] mb-16">
            <User className="w-8 h-8 text-[#EA4B71]" />
            {t("about.title")}
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Text + CV */}
          <div>
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <p className="text-[#8a8a93] leading-relaxed">
                  {t("about.p1")}
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-[#8a8a93] leading-relaxed">
                  {t("about.p2")}
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-[#8a8a93] leading-relaxed">
                  {t("about.p3")}
                </p>
              </StaggerItem>
            </StaggerContainer>

            {/* CV Download button */}
            <Reveal delay={0.3}>
              <a
                href="/cv_nicolas_hung.docx"
                download
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-white bg-[#EA4B71] hover:brightness-110 px-5 py-2.5 rounded-full transition-all duration-200 shadow-glow"
              >
                <Download className="w-4 h-4" />
                {t("about.cvBtn")}
              </a>
            </Reveal>
          </div>

          {/* Right: School card */}
          <Reveal delay={0.2}>
            <div className="bg-[#111113] border border-white/[0.06] rounded-[14px] p-6 hover:border-white/[0.12] hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EA4B71]/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#EA4B71]" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#EA4B71] block mb-1">
                    {schoolText.year}
                  </span>
                  <h3 className="text-base font-semibold text-[#f5f5f7] mb-1">
                    {schoolText.school}
                  </h3>
                  <p className="text-sm text-[#8a8a93] leading-relaxed mb-2">
                    {schoolText.fullName}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8a8a93] bg-[#1a1a1d] border border-white/[0.06] px-3 py-1.5 rounded-md">
                    {schoolText.degree}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
