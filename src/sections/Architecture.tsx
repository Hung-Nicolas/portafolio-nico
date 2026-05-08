import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import {
  Layers,
  Shield,
  FileJson,
  Zap,
  Clock,
  Workflow,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Arquitectura antes de código",
    description:
      "Dibujo diagramas (Mermaid, flujos, DDL) antes de escribir una línea. Frontend consume, backend procesa, base de datos persiste. Límites claros.",
  },
  {
    icon: FileJson,
    title: "Documentación viva",
    description:
      "Cada proyecto tiene su Notion con arquitectura, decisiones técnicas, convenciones y guía de operación. Si no está documentado, no existe.",
  },
  {
    icon: Workflow,
    title: "Automatización primero",
    description:
      "Identifico tareas repetitivas y las convierto en flujos n8n automáticos: reportes, notificaciones, sincronizaciones, alertas de monitoreo.",
  },
  {
    icon: Shield,
    title: "Seguridad práctica",
    description:
      "Autenticación con Supabase Auth, control de acceso por roles, validación de inputs en todas las capas. Nunca confiar en el cliente.",
  },
  {
    icon: Zap,
    title: "Escalabilidad pragmática",
    description:
      "No sobre-ingenierizo desde el día 1, pero dejo puertas abiertas: APIs REST documentadas, schemas normalizados, y despliegue sin fricción.",
  },
  {
    icon: Clock,
    title: "Monitoreo 24/7",
    description:
      "Servidor local con Docker en Arch Linux. n8n + base de datos en containers. Alertas automáticas cuando algo falla. Sé qué pasa en todo momento.",
  },
];

export function Architecture() {
  return (
    <section id="arquitectura" className="py-24 md:py-32 bg-[#0a0a0b]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs text-[#EA4B71] tracking-[0.1em] mb-4 block">
            ARQUITECTURA
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[#f5f5f7] tracking-[-0.02em] mb-4">
            Cómo pienso los sistemas
          </h2>
          <p className="text-[#8a8a93] max-w-[600px] mb-16">
            No solo escribo código. Diseño estructuras, documento decisiones y
            monitoreo todo el tiempo.
          </p>
        </Reveal>

        {/* Methodology pipeline */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {["ARQUITECTURA", "DOCUMENTACIÓN", "CÓDIGO", "TESTING", "PRODUCCIÓN"].map(
              (step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#EA4B71] bg-[rgba(234,75,113,0.12)] border border-[#EA4B71]/20 px-4 py-2 rounded-md whitespace-nowrap">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#5a5a63]" />
                  )}
                </div>
              )
            )}
          </div>
        </Reveal>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6 mb-16"
          staggerDelay={0.1}
        >
          {cards.map((card, i) => (
            <StaggerItem key={i}>
              <div className="group bg-[#111113] border border-white/[0.06] rounded-[14px] p-6 hover:border-white/[0.12] hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EA4B71]/10 flex items-center justify-center shrink-0 group-hover:bg-[#EA4B71]/20 transition-colors duration-300">
                    <card.icon className="w-5 h-5 text-[#EA4B71]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#f5f5f7] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#8a8a93] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Code snippet */}
        <Reveal>
          <div className="max-w-[600px] mx-auto">
            <div className="bg-[#0d0d0f] border border-white/[0.06] rounded-[10px] p-4 font-mono text-sm">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#3ECF8E]" />
                <span className="ml-2 text-xs text-[#5a5a63]">project/</span>
              </div>
              <pre className="text-[0.8rem] leading-relaxed text-[#8a8a93]">
                <span className="text-[#EA4B71]">project</span>/
                {"\n"}├── <span className="text-[#f5f5f7]">docs/</span>
                {"\n"}│   └──{" "}
                <span className="text-[#f59e0b]">architecture.md</span>{" "}
                <span className="text-[#5a5a63]"># Diagramas y flujos</span>
                {"\n"}├── <span className="text-[#f5f5f7]">src/</span>
                {"\n"}│   ├──{" "}
                <span className="text-[#3ECF8E]">frontend/</span>{" "}
                <span className="text-[#5a5a63]"># React + Vite</span>
                {"\n"}│   ├──{" "}
                <span className="text-[#3ECF8E]">backend/</span>{" "}
                <span className="text-[#5a5a63]"># Supabase / APIs</span>
                {"\n"}│   └──{" "}
                <span className="text-[#3ECF8E]">workflows/</span>{" "}
                <span className="text-[#5a5a63]"># n8n JSON exports</span>
                {"\n"}├── <span className="text-[#f5f5f7]">docker/</span>{" "}
                <span className="text-[#5a5a63]"># Compose + Dockerfiles</span>
                {"\n"}└── <span className="text-[#f5f5f7]">tests/</span>{" "}
                <span className="text-[#5a5a63]"># Verificación antes de prod</span>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
