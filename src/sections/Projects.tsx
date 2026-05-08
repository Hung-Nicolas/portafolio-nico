import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { Clock } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-[#111113]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs text-[#EA4B71] tracking-[0.1em] mb-4 block">
            {t("projects.label")}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[#f5f5f7] tracking-[-0.02em] mb-4">
            {t("projects.title")}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex items-center gap-3 text-[#8a8a93] mt-12">
            <Clock className="w-5 h-5 text-[#5a5a63]" />
            <p className="text-base">{t("projects.sub")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
