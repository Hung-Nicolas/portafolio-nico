import { motion } from "framer-motion";
import { ArrowRight, Workflow, Database, Bot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-20 pb-12 lg:pt-16 lg:pb-0 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(234,75,113,0.08), transparent)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* Photo + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex items-center justify-center lg:order-2 w-full max-w-[400px] h-[380px] sm:h-[420px] lg:h-[500px] mx-auto"
          >
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow behind photo */}
            <div
              className="absolute w-[240px] h-[300px] sm:w-[260px] sm:h-[340px] lg:w-[280px] lg:h-[380px] rounded-[20px]"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(234,75,113,0.18), transparent)",
                filter: "blur(40px)",
              }}
            />

            {/* Main photo */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="rounded-[20px] overflow-hidden border border-white/[0.08] shadow-card">
                <img
                  src="/foto-nico.jpg"
                  alt="Nicolás"
                  className="w-[200px] sm:w-[240px] lg:w-[260px] h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Floating card: n8n — top left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[8%] left-[2%] bg-[#111113] border border-white/[0.06] rounded-xl p-3 shadow-card z-20"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EA4B71]/10 flex items-center justify-center">
                  <Workflow className="w-3.5 h-3.5 text-[#EA4B71]" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-mono text-[#8a8a93] leading-tight">n8n</p>
                  <p className="text-[0.6rem] text-[#5a5a63] leading-tight">12 workflows</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card: Supabase — top right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-[12%] right-[2%] bg-[#111113] border border-white/[0.06] rounded-xl p-3 shadow-card z-20"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#3ECF8E]/10 flex items-center justify-center">
                  <Database className="w-3.5 h-3.5 text-[#3ECF8E]" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-mono text-[#8a8a93] leading-tight">Supabase</p>
                  <p className="text-[0.6rem] text-[#5a5a63] leading-tight">Backend en vivo</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card: WhatsApp Bot — bottom left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-[15%] left-[5%] bg-[#111113] border border-white/[0.06] rounded-xl p-3 shadow-card z-20"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-[#f59e0b]" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-mono text-[#8a8a93] leading-tight">WhatsApp</p>
                  <p className="text-[0.6rem] text-[#5a5a63] leading-tight">Gemini API</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card: code snippet — bottom right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              className="absolute bottom-[10%] right-[2%] bg-[#0d0d0f] border border-white/[0.06] rounded-lg p-2.5 shadow-card font-mono text-[0.6rem] leading-relaxed z-20"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
              </div>
              <p className="text-[#5a5a63]">
                <span className="text-[#8a8a93]">// trigger</span>
              </p>
              <p>
                <span className="text-[#EA4B71]">const</span>{" "}
                <span className="text-[#f5f5f7]">wf</span>{" "}
                <span className="text-[#8a8a93]">=</span>{" "}
                <span className="text-[#3ECF8E]">n8n</span>
                <span className="text-[#f5f5f7]">.trigger()</span>
              </p>
            </motion.div>

            {/* Connection lines SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-15 z-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="22%"
                y1="25%"
                x2="42%"
                y2="38%"
                stroke="rgba(234,75,113,0.3)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="58%"
                y1="35%"
                x2="72%"
                y2="28%"
                stroke="rgba(62,207,142,0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="38%"
                y1="72%"
                x2="28%"
                y2="62%"
                stroke="rgba(234,75,113,0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="55%"
                y1="70%"
                x2="68%"
                y2="58%"
                stroke="rgba(62,207,142,0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Glow dots */}
            <div className="absolute top-[28%] left-[40%] w-1.5 h-1.5 rounded-full bg-[#EA4B71]/40 animate-pulse-glow z-0" />
            <div className="absolute top-[60%] right-[35%] w-2 h-2 rounded-full bg-[#3ECF8E]/30 animate-pulse-glow z-0" />
            <div className="absolute bottom-[35%] left-[45%] w-1.5 h-1.5 rounded-full bg-[#EA4B71]/35 animate-pulse-glow z-0" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="inline-block font-mono text-[0.7rem] sm:text-xs text-[#EA4B71] tracking-[0.1em] mb-4 sm:mb-5"
            >
              {t("hero.label")}
            </motion.span>

            <h1 className="text-[clamp(1.9rem,7vw,4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#f5f5f7] mb-5 sm:mb-6 whitespace-pre-line">
              {t("hero.headline")}
            </h1>

            <p className="text-base sm:text-lg text-[#8a8a93] max-w-[440px] mx-auto lg:mx-0 mb-7 sm:mb-8 leading-relaxed">
              {t("hero.sub")}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#proyectos"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#proyectos");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 64;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#EA4B71] hover:brightness-110 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-glow"
              >
                {t("hero.btn1")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#contacto");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 64;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#f5f5f7] border border-white/[0.06] hover:border-white/[0.12] hover:bg-[#1a1a1d] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200"
              >
                {t("hero.btn2")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
