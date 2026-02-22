# Portfolio Engineering Standards

This document defines the technical and aesthetic standards for the **Industrial Architecture Portfolio**. All development must adhere to these guidelines to ensure consistency, maintainability, and alignment with **Astro Official Best Practices**.

---

## 1. Component Architecture (Astro Official Standards)

Astro components thrive on the **Separation of Concerns**. We strictly follow the "Server-First" mental model.

### Frontmatter: The Component Script (`---`)

According to [Astro Docs](https://docs.astro.build/en/basics/astro-components/#the-component-script), the frontmatter is for **data and logic**.

- **Data Encapsulation**: NO hardcoded strings in the template. All labels, usernames, technical specs, and links must be defined as variables in the frontmatter.
- **Single Source of Truth**: Group related data into objects (e.g., `const contact = { ... }`).
- **Imports**: All components and utilities must be imported at the top.

### The Template: HTML + JS Expressions

- **Variable Mapping**: Reference variables defined in the frontmatter using `{variableName}`.
- **Directives**: Use `set:html` for content that requires HTML rendering (like translated strings with tags).
- **Semantics**: Use `h1-h6` for a proper document outline. Ensure section titles remain consistent across components.

---

## 2. CSS Architecture & Tailwind v4

We use **Tailwind v4** for its performance and modern CSS features.

### Global vs Local

- **System Styles**: Custom scrollbars, global font resets, and background behaviors must live in `src/styles/global.css` using `@layer base`.
- **is:global**: Only use `<style is:global>` in `Layout.astro` or specific components if a browser-level override is strictly necessary. Preference goes to `global.css`.
- **Theme Consistency**: ALWAYS use CSS variables (e.g., `var(--color-lavender)`) defined in the Tailwind `@theme` block. Do not use ad-hoc hex codes.

---

## 3. i18n & Content Strategy

### Translation Dictionary (`ui.ts`)

- **Translatable Content**: Only content that the visitor _reads_ (CTAs, descriptions) goes here.
- **Efficiency**: Use descriptive, nested keys (e.g., `projects.title.accent`).

### Local Constants (Engineering Branding)

- **Static Technical Data**: Dates, copyright notices, software versions, and GitHub/LinkedIn handles are considered "Technical Branding" and should remain in English within the component frontmatter variables.

---

## 4. Aesthetic Precision (Industrial Grade)

- **Typography Strategy**:
  - Headlines: `font-black` + `uppercase` + `tracking-tighter`.
  - Technical Labels: `text-[10px]` + `tracking-[0.4em]` or `tracking-widest`.
- **Layout Rhythm**: Use `min-h-screen` and `snap-start` for the full-height scroll experience defined in the project structure.
- **Borders over Shadows**: Use `border-carbon-light` (1px) for all structural dividers. Shadows are forbidden unless explicitly specified in the UI Guide.
