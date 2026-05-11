import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: keyof typeof translations.es) => string;
}

const translations = {
  es: {
    // Navbar
    "nav.inicio": "Inicio",
    "nav.sobre": "Sobre mí",
    "nav.skills": "Skills",
    "nav.proyectos": "Proyectos",
    "nav.contacto": "Contacto",
    "nav.cta": "Hablemos",
    // Hero
    "hero.label": "DESARROLLADOR FULL STACK",
    "hero.headline": "Soy Nico.\nConstruyo sistemas que ahorran tiempo.",
    "hero.sub": "Especialista en automatización con n8n. Backend con Supabase. Frontend con React + Vite.",
    "hero.btn1": "Ver proyectos",
    "hero.btn2": "Contactarme",
    // About
    "about.label": "SOBRE MÍ",
    "about.title": "Quién soy y qué hago",
    "about.p1": "Soy Nicolás, desarrollador fullstack de CABA, Argentina. Me especializo en automatización de workflows con n8n — construyo flujos que capturan leads, sincronizan datos entre aplicaciones y generan reportes automáticos.",
    "about.p2": "Para backend trabajo con Supabase (PostgreSQL, auth, realtime). Para frontend uso React + Vite + Tailwind, asistido por IA para desarrollo rápido sin sacrificar calidad.",
    "about.p3": "Mi objetivo principal es ser programador de SaaS — construir productos escalables que resuelvan problemas reales.",
    "about.cvBtn": "Descargar CV",
    "about.timelineTitle": "Mi camino",
    "about.t1.year": "2026",
    "about.t1.title": "Proyectos reales con IA",
    "about.t1.desc": "Desarrollo fullstack con Supabase, React+Vite y asistencia de IA. Construyendo SaaS y proyectos reales.",
    "about.t2.year": "2025",
    "about.t2.title": "Descubro n8n y autodidacta",
    "about.t2.desc": "Descubrí n8n y me formé de forma autónoma en automatización de workflows, integraciones y servidores.",
    "about.t3.year": "2020 – 2026",
    "about.t3.title": "Secundaria técnica en computación",
    "about.t3.desc": "Estudio técnico en computación. Base sólida en programación, lógica y sistemas.",
    // Skills
    "skills.label": "STACK TÉCNICO",
    "skills.title": "Herramientas que uso para construir",
    "skills.sub": "No acumulo tecnologías por acumular. Estas son las herramientas con las que resuelvo problemas reales.",
    "skills.exploring": "Explorando",
    // Projects
    "projects.label": "PROYECTOS",
    "projects.title": "Cosas que construí",
    "projects.sub": "Proyectos reales que resuelven problemas concretos.",
    "projects.viewProject": "Ver proyecto",
    "projects.viewRepo": "Ver código",
    "projects.gie.title": "GIE — Gestor de Informes Escolares",
    "projects.gie.desc": "Sistema web para gestionar, generar y exportar informes escolares. Permite crear alumnos, asignar materias, cargar calificaciones y generar PDFs de informes periódicos de forma automática.",
    // Contact
    "contact.label": "CONTACTO",
    "contact.title": "¿Tenés un proceso que toma horas?",
    "contact.sub": "Hablemos. Me especializo en convertir tareas repetitivas en flujos automáticos que ahorran tiempo y dinero.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.msg": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.sending": "Enviando...",
    "contact.sent": "¡Mensaje enviado!",
    "contact.quote": "Construyo soluciones de automatización que ahorran tiempo y dinero. Especialista en n8n con experiencia en infraestructura 24/7.",
    // Footer
    "footer.copy": "Nicolás. Construido con React, Tailwind, n8n y café.",
    "footer.issue": "¿Ves algo roto? Abrí un issue.",
    "footer.tagline": "Sistemas simples, bien pensados, que funcionan.",
  },
  en: {
    // Navbar
    "nav.inicio": "Home",
    "nav.sobre": "About",
    "nav.skills": "Skills",
    "nav.proyectos": "Projects",
    "nav.contacto": "Contact",
    "nav.cta": "Let's talk",
    // Hero
    "hero.label": "FULL STACK DEVELOPER",
    "hero.headline": "I'm Nico.\nI build systems that save time.",
    "hero.sub": "n8n automation specialist. Supabase backend. React + Vite frontend.",
    "hero.btn1": "See projects",
    "hero.btn2": "Contact me",
    // About
    "about.label": "ABOUT ME",
    "about.title": "Who I am and what I do",
    "about.p1": "I'm Nicolás, a fullstack developer from Buenos Aires, Argentina. I specialize in workflow automation with n8n — I build flows that capture leads, sync data between apps and generate automatic reports.",
    "about.p2": "For backend I work with Supabase (PostgreSQL, auth, realtime). For frontend I use React + Vite + Tailwind, assisted by AI for fast development without sacrificing quality.",
    "about.p3": "My main goal is to become a SaaS developer — building scalable products that solve real problems.",
    "about.cvBtn": "Download CV",
    "about.timelineTitle": "My journey",
    "about.t1.year": "2026",
    "about.t1.title": "Real projects with AI",
    "about.t1.desc": "Fullstack development with Supabase, React+Vite and AI assistance. Building SaaS and real projects.",
    "about.t2.year": "2025",
    "about.t2.title": "Discovered n8n, self-taught",
    "about.t2.desc": "Discovered n8n and taught myself workflow automation, integrations and servers.",
    "about.t3.year": "2020 – 2026",
    "about.t3.title": "Technical high school in computing",
    "about.t3.desc": "Technical studies in computing. Solid foundation in programming, logic and systems.",
    // Skills
    "skills.label": "TECH STACK",
    "skills.title": "Tools I use to build",
    "skills.sub": "I don't accumulate technologies. These are the tools I use to solve real problems.",
    "skills.exploring": "Exploring",
    // Projects
    "projects.label": "PROJECTS",
    "projects.title": "Things I've built",
    "projects.sub": "Real projects that solve concrete problems.",
    "projects.viewProject": "View project",
    "projects.viewRepo": "View code",
    "projects.gie.title": "GIE — School Reports Manager",
    "projects.gie.desc": "Web system to manage, generate and export school reports. Allows creating students, assigning subjects, loading grades and automatically generating periodic report PDFs.",
    // Contact
    "contact.label": "CONTACT",
    "contact.title": "Got a process that takes hours?",
    "contact.sub": "Let's talk. I specialize in turning repetitive tasks into automatic flows that save time and money.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.msg": "Message",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.sent": "Message sent!",
    "contact.quote": "I build automation solutions that save time and money. n8n specialist with 24/7 infrastructure experience.",
    // Footer
    "footer.copy": "Nicolás. Built with React, Tailwind, n8n and coffee.",
    "footer.issue": "See something broken? Open an issue.",
    "footer.tagline": "Simple systems, well thought out, that work.",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggleLang: () => {},
  t: (key: keyof typeof translations.es) => translations.es[key],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = (key: keyof typeof translations.es) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
