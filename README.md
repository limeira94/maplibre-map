# QGIS-Like Map Project with Vite, TypeScript, Tailwind, and MapLibre

This repository demonstrates how to build a **QGIS-like** web map interface using:

- **Vite** (bundler/dev server)
- **TypeScript** (type-safe JavaScript)
- **Tailwind CSS** (utility-first CSS framework)
- **MapLibre GL JS** (open-source mapping library)

It features:
- A **sidebar** that lists example layers (togglable).
- A **map** powered by MapLibre.
- A **responsive layout** using Tailwind’s utility classes.
- A **toggle button** to collapse/expand the sidebar (with a rotating arrow icon).

---

## Table of Contents

1. [Getting Started](#getting-started)  
2. [Project Structure](#project-structure)  
3. [Available Scripts](#available-scripts)  
4. [Key Files Explained](#key-files-explained)  
5. [Customization Ideas](#customization-ideas)  

---

## Getting Started

Follow these steps to get the project up and running locally.

### 1. Clone or Create a New Project

Clone this repository. If you’d rather start fresh, create a new Vite project (vanilla TS template):

```bash
npm create vite@latest my-maplibre-project -- --template vanilla-ts
cd my-maplibre-project
```

### 2. Install Dependencies
```npm install```

This project uses:

- Tailwind CSS + PostCSS + Autoprefixer
- MapLibre GL
- TypeScript
- Vite

### 3. Start the Development Server
```npm run dev```

