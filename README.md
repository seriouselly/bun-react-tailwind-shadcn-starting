# Tugas React - Bootcamp RevoU

## 🧱 Tech Stack

- Bun
- React
- TypeScript
- TailwindCSS

## 🚀 Fitur

- Komponen Counter (increment, decrement, reset)
- State menggunakan useState
- Props untuk mengirim state & handler
- Lifting state up ke App.tsx

## 🧪 Screenshots

![Counter Screenshot](./docs/images/bun-react.png)

## 🛠️ Cara Menjalankan

````bash
bun install
bun dev


✅ Commit lagi:
```bash
git add .
git commit -m "docs: add README documentation with screenshot"
````

# Bun - React - Tailwind - Shadcn | Starting Template

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To build the project:

```bash
bun run build
```

To run for production:

```bash
bun start
```

This project was created using `bun init` in bun v1.2.19. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

---

## Project Structure

```ts
└── 📁src   // Main source directory
    └── 📁components    // Reusable UI components
        └── 📁shared    // Shared components
        └── 📁ui    // Shadcn UI components
            ├── button.tsx
            ├── card.tsx
            ├── form.tsx
            ├── input.tsx
            ├── label.tsx
            ├── select.tsx
    └── 📁hooks   // Custom hooks
    └── 📁lib   // Library functions
        ├── utils.ts    // Utility functions
    └── 📁pages   // Page components
    └── 📁public    // Public assets
        └── 📁images    // Image assets
            ├── logo.svg
            ├── react.svg
        └── 📁styles    // CSS Styles directory
            ├── globals.css
        ├── index.html    // Main HTML file
    └── 📁routes    // Application routes
    └── 📁stores    // Global state management (Zustand)
    └── 📁types   // TypeScript type definitions
    ├── APITester.tsx   // API testing component
    ├── App.tsx   // Main application component
    ├── index.ts    // Entry point for the application
    ├── main.tsx    // Main entry file for the React application
├── .env    // Environment variables
├── .gitignore    // Git ignore file
├── build.ts    // Build script
├── bun-env.d.ts    // Type definitions for Bun environment
├── bun.lock    // Bun lock file
├── bunfig.toml   // Bun configuration file
├── components.json   // Shadcn Components configuration
├── package.json    // Project configuration
├── README.md   // Project documentation
└── tsconfig.json   // TypeScript configuration
```
