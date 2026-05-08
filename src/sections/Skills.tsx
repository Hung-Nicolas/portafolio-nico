import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import {
  Code2,
  Layout,
  Database,
  Workflow,
  GitBranch,
  Cpu,
  Globe,
  Link2,
  Bot,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiN8N,
  SiGit,
  SiGithub,
  SiDocker,
  SiGithubactions,
  SiNotion,
  SiNextdotjs,
  SiVercel,
  SiJson,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { useLanguage } from "@/context/LanguageContext";

type TechDef = { icon: IconType | LucideIcon; color: string };

const techIcons: Record<string, TechDef> = {
  Java: { icon: Code2, color: "#E76F00" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Python: { icon: SiPython, color: "#3776AB" },
  SQL: { icon: Database, color: "#8a8a93" },
  "HTML/CSS": { icon: SiHtml5, color: "#E34F26" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Vite: { icon: SiVite, color: "#646CFF" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  "APIs REST": { icon: Globe, color: "#8a8a93" },
  n8n: { icon: SiN8N, color: "#EA4B71" },
  Webhooks: { icon: Link2, color: "#8a8a93" },
  Integraciones: { icon: Link2, color: "#8a8a93" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#ffffff" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Claude: { icon: Bot, color: "#D97757" },
  "Kimi Code": { icon: Bot, color: "#8a8a93" },
  Notion: { icon: SiNotion, color: "#ffffff" },
  JSON: { icon: SiJson, color: "#ffffff" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
};

function TechBadge({ name }: { name: string }) {
  const def = techIcons[name];
  if (!def) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8a8a93] bg-[#1a1a1d] border border-white/[0.06] px-2.5 py-1.5 rounded-md">
        <Code2 className="w-3.5 h-3.5 shrink-0" />
        {name}
      </span>
    );
  }
  const Icon = def.icon;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8a8a93] bg-[#1a1a1d] border border-white/[0.06] px-2.5 py-1.5 rounded-md">
      <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: def.color }} />
      {name}
    </span>
  );
}

const skillData = [
  {
    icon: Code2,
    title: "Lenguajes",
    titleEn: "Languages",
    tags: ["Java", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    icon: Layout,
    title: "Frontend",
    titleEn: "Frontend",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    icon: Database,
    title: "Backend & Datos",
    titleEn: "Backend & Data",
    tags: ["Supabase", "MySQL", "PostgreSQL", "APIs REST"],
  },
  {
    icon: Workflow,
    title: "Automatización",
    titleEn: "Automation",
    tags: ["n8n", "Webhooks", "Integraciones"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Tools",
    titleEn: "DevOps & Tools",
    tags: ["Git", "GitHub", "Docker", "GitHub Actions"],
  },
  {
    icon: Cpu,
    title: "IA & Productividad",
    titleEn: "AI & Productivity",
    tags: ["Claude", "Kimi Code", "Notion"],
  },
];

export function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0a0a0b]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs text-[#EA4B71] tracking-[0.1em] mb-4 block">
            {t("skills.label")}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[#f5f5f7] tracking-[-0.02em] mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-[#8a8a93] max-w-[600px] mb-16">
            {t("skills.sub")}
          </p>
        </Reveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {skillData.map((skill, i) => (
            <StaggerItem key={i}>
              <div className="group bg-[#111113] border border-white/[0.06] rounded-[14px] p-6 hover:border-white/[0.12] hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-[#EA4B71]/10 flex items-center justify-center mb-4 group-hover:bg-[#EA4B71]/20 transition-colors duration-300">
                  <skill.icon className="w-5 h-5 text-[#EA4B71]" />
                </div>
                <h3 className="text-base font-semibold text-[#f5f5f7] mb-4">
                  {lang === "es" ? skill.title : skill.titleEn}
                </h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Exploring */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#5a5a63]">
            <span className="font-mono text-xs text-[#3ECF8E] uppercase tracking-wider">
              {t("skills.exploring")}:
            </span>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Vercel", "Testing"].map((tName) => (
                <TechBadge key={tName} name={tName} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
