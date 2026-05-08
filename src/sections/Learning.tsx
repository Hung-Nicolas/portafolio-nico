import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { Server, Box, Shield, BookOpen } from "lucide-react";

const items = [
  {
    icon: Server,
    title: "Next.js en profundidad",
    description:
      "SSR, SSG, API routes, App Router. Migrando de Vite a Next.js para proyectos que necesitan SEO y mejor performance.",
  },
  {
    icon: Box,
    title: "Docker & Linux avanzado",
    description:
      "Orquestación multi-container, networking, volúmenes persistentes y monitoreo avanzado en servidores Arch Linux.",
  },
  {
    icon: Shield,
    title: "Seguridad avanzada",
    description:
      "OAuth 2.0, JWT profundo, refresh tokens, rate limiting y hardening de servidores. Seguridad desde el diseño.",
  },
  {
    icon: BookOpen,
    title: "Testing real",
    description:
      "Unit tests, integration tests y E2E. Verificación automatizada antes de cada deploy a producción.",
  },
];

export function Learning() {
  return (
    <section className="py-24 md:py-32 bg-[#111113]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs text-[#EA4B71] tracking-[0.1em] mb-4 block">
            EN PROGRESO
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[#f5f5f7] tracking-[-0.02em] mb-12">
            Actualmente aprendiendo
          </h2>
        </Reveal>

        <StaggerContainer
          className="grid sm:grid-cols-2 gap-8"
          staggerDelay={0.1}
        >
          {items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 pb-8 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-lg bg-[#EA4B71]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#EA4B71]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#f5f5f7] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8a8a93] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
