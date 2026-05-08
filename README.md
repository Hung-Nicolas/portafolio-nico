# Nicolás Hung | Portfolio

[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://portafolio-nico-tau.vercel.app)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Portfolio personal desarrollado con React, TypeScript y Tailwind CSS. Diseño moderno, animaciones fluidas y soporte multi-idioma.

🔗 **Sitio en vivo:** [https://portafolio-nico-tau.vercel.app](https://portafolio-nico-tau.vercel.app)

---

## ✨ Características

- 🎨 **Diseño dark moderno** con paleta de colores personalizada y tipografía cuidada
- 🌍 **Soporte multi-idioma** (Español / Inglés) con cambio dinámico de contenido
- ✨ **Animaciones fluidas** con Framer Motion (reveal on scroll, transiciones, micro-interacciones)
- 📱 **Totalmente responsive** adaptado a mobile, tablet y desktop
- ⚡ **Rendimiento optimizado** con Vite y lazy loading
- 🧩 **Componentes reutilizables** con shadcn/ui + Radix UI
- 📊 **Formulario de contacto** con validación usando React Hook Form + Zod
- 🖼️ **Galería de proyectos** con presentación profesional

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnologías |
|-----------|-------------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 7 |
| **Estilos** | Tailwind CSS 3 + CSS Modules |
| **Animaciones** | Framer Motion |
| **Routing** | React Router v7 |
| **UI Components** | shadcn/ui + Radix UI + Lucide React |
| **Formularios** | React Hook Form + Zod |
| **Charts** | Recharts |
| **Deploy** | Vercel |

---

## 📁 Estructura del Proyecto

```
portafolio-nico/
├── public/               # Assets estáticos (imágenes, CV, logos)
├── src/
│   ├── components/       # Componentes reutilizables (UI + Reveal)
│   ├── context/          # Contextos (LanguageContext)
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilidades
│   ├── pages/            # Páginas (Home)
│   ├── sections/         # Secciones del portfolio
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── vercel.json           # Configuración para SPA en Vercel
```

---

## 🚀 Cómo correrlo localmente

### Prerrequisitos
- Node.js 18+
- npm o pnpm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Hung-Nicolas/portafolio-nico.git

# 2. Entrar al directorio
cd portafolio-nico

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000` (o el puerto que indique la consola).

### Build de producción

```bash
npm run build
```

Los archivos estáticos se generan en la carpeta `dist/`.

---

## 📦 Deploy

El proyecto está configurado para deploy automático en **Vercel**:

1. Conectá tu repo de GitHub en [vercel.com](https://vercel.com)
2. Vercel detecta automáticamente que es un proyecto Vite
3. Cada `git push` a `main` genera un nuevo deploy automáticamente

> También podés hacer deploy manual con la CLI: `npx vercel --prod`

---

## 📝 Licencia

Este proyecto es de uso personal. Si querés usarlo como base para tu propio portfolio, ¡sentite libre de hacerlo! Solo te pido que le des ⭐ al repo.

---

<p align="center">
  Hecho con ❤️ por <strong>Nicolás Hung</strong>
</p>
