import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "submitting" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const webhookUrl = import.meta.env.DEV
      ? "/api/contact"
      : import.meta.env.VITE_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      alert("Webhook no configurado. Revisa tu archivo .env.local");
      return;
    }

    setFormState("submitting");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al enviar");

      setFormState("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormState("idle");
      alert("No se pudo enviar el mensaje. Intenta de nuevo.");
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#0a0a0b]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs text-[#EA4B71] tracking-[0.1em] mb-4 block">
            {t("contact.label")}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[#f5f5f7] tracking-[-0.02em] mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-[#8a8a93] max-w-[600px] mb-16">
            {t("contact.sub")}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info + Form */}
          <div>
            {/* Social links */}
            <div className="space-y-4 mb-10">
              <a
                href="mailto:nicohung.trabajo@gmail.com"
                className="flex items-center gap-3 text-[#8a8a93] hover:text-[#f5f5f7] transition-all duration-200 group"
              >
                <Mail className="w-5 h-5 text-[#5a5a63] group-hover:text-[#EA4B71] transition-colors duration-200" />
                <span className="text-sm">nicohung.trabajo@gmail.com</span>
              </a>
              <a
                href="https://github.com/Hung-Nicolas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#8a8a93] hover:text-[#f5f5f7] transition-all duration-200 group"
              >
                <Github className="w-5 h-5 text-[#5a5a63] group-hover:text-[#EA4B71] transition-colors duration-200" />
                <span className="text-sm">github.com/Hung-Nicolas</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nicolas-hung-600554401/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#8a8a93] hover:text-[#f5f5f7] transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-[#5a5a63] group-hover:text-[#EA4B71] transition-colors duration-200" />
                <span className="text-sm">linkedin.com/in/nicolas-hung</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs text-[#5a5a63] uppercase tracking-[0.05em] mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1a1a1d] border border-white/[0.06] rounded-[10px] px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[#5a5a63] focus:border-[#EA4B71] focus:outline-none focus:shadow-glow transition-all duration-200"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-[#5a5a63] uppercase tracking-[0.05em] mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1a1a1d] border border-white/[0.06] rounded-[10px] px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[#5a5a63] focus:border-[#EA4B71] focus:outline-none focus:shadow-glow transition-all duration-200"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-[#5a5a63] uppercase tracking-[0.05em] mb-2">
                  {t("contact.msg")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-[#1a1a1d] border border-white/[0.06] rounded-[10px] px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[#5a5a63] focus:border-[#EA4B71] focus:outline-none focus:shadow-glow transition-all duration-200 resize-none"
                  placeholder=""
                  required
                />
              </div>
              <button
                type="submit"
                disabled={formState !== "idle"}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-[#EA4B71] hover:brightness-110 px-6 py-3 rounded-full transition-all duration-200 shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t("contact.sending")}
                  </>
                ) : formState === "sent" ? (
                  <>
                    <Mail className="w-4 h-4" />
                    {t("contact.sent")}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t("contact.send")}
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right: Quote */}
          <div className="relative flex flex-col justify-center">
            <Reveal delay={0.2}>
              <blockquote className="text-lg text-[#8a8a93] leading-relaxed italic">
                "{t("contact.quote")}"
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
