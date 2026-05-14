import { useState } from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Github, FileText } from "lucide-react";
import { SiReact, SiVite, SiTailwindcss, SiSupabase } from "react-icons/si";
import type { IconType } from "react-icons";
import gieLogin from "@/assets/GIE_captures/gie_login.png";
import gieDashboard from "@/assets/GIE_captures/gie_dashboard.png";
import gieInformes from "@/assets/GIE_captures/gie_informes.png";
import gieEstadisticas from "@/assets/GIE_captures/gie_estadisticas.png";
import gieAlumnos from "@/assets/GIE_captures/gie_alumnos.png";
import esquinaImg from "@/assets/project-esquina.png";

interface Project {
  id: string;
  key: string;
  image: string;
  captures: string[];
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "gie",
    key: "projects.gie",
    image: gieLogin,
    captures: [gieLogin, gieDashboard, gieInformes, gieEstadisticas, gieAlumnos],
    tags: ["React", "Vite", "Tailwind CSS", "Supabase", "PDF Generation"],
    repoUrl: "https://github.com/Hung-Nicolas/GIE",
  },
  {
    id: "esquina",
    key: "projects.esquina",
    image: esquinaImg,
    captures: [esquinaImg],
    tags: ["React", "Vite", "Tailwind CSS", "GSAP"],
    repoUrl: "https://github.com/Hung-Nicolas/esquina-booking",
    liveUrl: "https://esquina-booking.vercel.app/",
  },
];

const techBadgeIcons: Record<string, { icon: IconType | typeof FileText; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  Vite: { icon: SiVite, color: "#646CFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  "PDF Generation": { icon: FileText, color: "#8a8a93" },
};

function TechBadge({ name }: { name: string }) {
  const def = techBadgeIcons[name];
  const Icon = def ? def.icon : FileText;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8a8a93] bg-[#1a1a1d] border border-white/[0.06] px-2.5 py-1.5 rounded-md">
      <Icon className="w-3.5 h-3.5 shrink-0" style={def ? { color: def.color } : undefined} />
      {name}
    </span>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
          <p className="text-[#8a8a93] max-w-[600px] mb-16">
            {t("projects.sub")}
          </p>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <button
                onClick={() => setActiveProject(project)}
                className="group w-full h-full flex flex-col text-left bg-[#111113] border border-white/[0.06] rounded-[14px] overflow-hidden hover:border-white/[0.12] hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#0a0a0b]">
                  <img
                    src={project.image}
                    alt={t(`${project.key}.title` as any)}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-[#f5f5f7] mb-2">
                    {t(`${project.key}.title` as any)}
                  </h3>
                  <p className="text-sm text-[#8a8a93] leading-relaxed mb-4 line-clamp-3">
                    {t(`${project.key}.desc` as any)}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Project Modal */}
      <Dialog
        open={activeProject !== null}
        onOpenChange={(open) => !open && setActiveProject(null)}
      >
        <DialogContent className="sm:max-w-4xl bg-[#111113] border-white/[0.06] text-[#f5f5f7] p-0 overflow-hidden gap-0">
          {activeProject && (
            <>
              {/* Carousel */}
              <div className="relative bg-[#0a0a0b]">
                <Carousel className="w-full">
                  <CarouselContent>
                    {activeProject.captures.map((capture, idx) => (
                      <CarouselItem key={idx}>
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={capture}
                            alt={`${t(`${activeProject.key}.title` as any)} ${idx + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3 bg-[#1a1a1d]/80 border-white/[0.06] text-[#f5f5f7] hover:bg-[#1a1a1d] hover:text-[#EA4B71]" />
                  <CarouselNext className="right-3 bg-[#1a1a1d]/80 border-white/[0.06] text-[#f5f5f7] hover:bg-[#1a1a1d] hover:text-[#EA4B71]" />
                </Carousel>
              </div>

              {/* Content */}
              <div className="p-6">
                <DialogHeader className="text-left mb-4">
                  <DialogTitle className="text-xl font-semibold text-[#f5f5f7]">
                    {t(`${activeProject.key}.title` as any)}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-[#8a8a93] leading-relaxed">
                    {t(`${activeProject.key}.desc` as any)}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#EA4B71] text-white text-sm font-medium hover:bg-[#EA4B71]/90 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      {t("projects.viewProject")}
                    </a>
                  )}
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1a1a1d] border border-white/[0.06] text-[#f5f5f7] text-sm font-medium hover:border-white/[0.12] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {t("projects.viewRepo")}
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
