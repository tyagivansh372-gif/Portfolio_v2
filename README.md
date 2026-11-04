# Vansh Tyagi — 3D Portfolio

> A real-time 3D, single-page portfolio built with Next.js 16, React Three Fiber, and Framer Motion.

<!-- TODO: replace with your actual Vercel / custom-domain URL -->
[**Live Demo**](https://<!-- TODO: confirm -->) · [**GitHub Repo**](https://github.com/<!-- TODO: confirm -->)

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-black?style=flat-square&logo=threedotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![Node](https://img.shields.io/badge/Node-%E2%89%A518.18-339933?style=flat-square&logo=nodedotjs)

---

## Overview

An immersive, dark-mode-only portfolio for Vansh Tyagi — part engineering showcase, part 3D web-graphics experiment. A WebGL "Digital Ocean" wireframe scene and a scroll-linked naval vessel run as a fixed background layer while Hero, Skills, Projects, Experience, and Contact sections animate in above it. The contact form validates input client-side with Zod and relays messages to the site owner via the Resend email API.

---

## Screenshots
<img width="1585" height="777" alt="Screenshot (159)" src="https://github.com/user-attachments/assets/32a3d475-eacf-4486-a7f4-bc913436e542" />

<img width="1600" height="768" alt="Screenshot (160)" src="https://github.com/user-attachments/assets/f6d35097-ca72-48ca-b9d1-85e3ca42f54e" />

## Features

- **Real-time 3D background** — a 160 × 160 wireframe plane displaced by multi-layer Simplex noise via custom GLSL vertex and fragment shaders, running inside a React Three Fiber `<Canvas>`.
- **Scroll-driven 3D animation** — a procedural naval vessel lerps along the Z axis as the visitor scrolls, transitioning from deep fog to a close fly-past.
- **Lenis smooth scrolling** — buttery `scrollIntoView` navigation across all page sections.
- **Framer Motion entrance animations** — every section fades and slides into view with staggered delays; the Experience section uses spring physics.
- **Custom animated cursor** — a glowing cyan dot with `mix-blend-mode: difference`, hidden on mobile (`hidden md:block`).
- **Validated contact form** — `react-hook-form` + Zod schema (name ≥ 2 chars, valid email, message ≥ 10 chars); animated success state with a pulse-ring effect.
- **Email relay API route** — `POST /api/send` forwards messages through Resend with the sender's address set as `replyTo`.
- **Live system clock** — footer renders a ticking `HH:MM:SS` timestamp.
- **ShadCN UI primitives** — `Button`, `Card`, `Input`, `Textarea` components via Radix UI + `class-variance-authority`.
- **Dark-mode glassmorphism theme** — custom Tailwind v4 design tokens for neon cyan/violet glow, `backdrop-blur`, and `oklch` colour variables.

> **Note:** The `DataDrone` component (`components/ui/canvas/DataDrone.tsx`) is implemented but not currently mounted in `Scene.tsx`. See Roadmap.

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 16.1.6 (App Router), React 19.2.3 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4, `tw-animate-css`, ShadCN UI |
| **3D / WebGL** | Three.js 0.182.0, `@react-three/fiber` 9.5.0, `@react-three/drei` 10.7.7 |
| **Animation** | Framer Motion 12, `@studio-freight/react-lenis` |
| **Forms / Validation** | `react-hook-form` 7, Zod 4, `@hookform/resolvers` 5 |
| **Email** | Resend 6.9.1 |
| **UI Primitives** | Radix UI, Lucide React, `class-variance-authority`, `sonner` |
| **Theming** | `next-themes` (hard-coded dark in root layout) |
| **Tooling** | ESLint 9, `eslint-config-next` (core-web-vitals + TypeScript) |
| **Deployment** | Vercel <!-- TODO: confirm — no vercel.json present; inferred from Vercel badge in public/ --> |

---

## Project Structure

```
my-futuristic-portfolio/
├── app/
│   ├── api/
│   │   └── send/
│   │       └── route.ts          # POST /api/send — Resend email relay
│   ├── globals.css               # Tailwind v4 config, custom design tokens, glass-panel utility
│   ├── layout.tsx                # Root layout: Scene, SmoothScroll, Cursor, Toaster
│   └── page.tsx                  # Single page: all section components
├── components/
│   ├── Cursor.tsx                # Framer Motion spring-based custom cursor (desktop only)
│   ├── ui/
│   │   ├── button.tsx            # ShadCN button (CVA variants)
│   │   ├── canvas/
│   │   │   ├── Scene.tsx         # React Three Fiber Canvas: fog, lights, ContactShadows
│   │   │   ├── DigitalOcean.tsx  # Custom GLSL wireframe terrain shader
│   │   │   ├── NavalVessel.tsx   # Procedural ship, scroll-linked Z-axis movement
│   │   │   └── DataDrone.tsx     # Autonomous flyover drone (not yet mounted)
│   │   ├── card.tsx              # ShadCN card primitive
│   │   ├── input.tsx             # ShadCN input primitive
│   │   ├── textarea.tsx          # ShadCN textarea primitive
│   │   ├── sonner.tsx            # Toast wrapper using next-themes
│   │   └── sections/
│   │       ├── Hero.tsx          # Name, profile image, role badges, CTA buttons
│   │       ├── Skills.tsx        # 3-column responsive grid (md:grid-cols-3) of skill categories
│   │       ├── Projects.tsx      # Featured project cards with hover reveal
│   │       ├── Experience.tsx    # Service record cards with spring animations
│   │       ├── Contact.tsx       # Zod-validated form → POST /api/send
│   │       ├── Footer.tsx        # Live clock, LinkedIn link, brand identity
│   │       └── SmoothScroll.tsx  # ReactLenis wrapper
├── lib/
│   └── utils.ts                  # cn() helper — clsx + tailwind-merge
├── public/
│   ├── profile.jpeg              # Hero headshot
│   ├── profile2.jpeg             # Alternate headshot
│   ├── tyagi-estates.jpeg        # Tyagi Estates project thumbnail
│   └── Batman.jpg                # Portfolio project thumbnail
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json                 # strict: true, paths: { "@/*": "./*" }
└── .env.example                  # ← Create from this file before first run
```

---

## Getting Started

### Prerequisites

- **Node.js ≥ 18.18.0** <!-- TODO: confirm — no `engines` field in package.json; version taken from Next.js 16 minimum requirement -->
- **npm** (bundled with Node)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<!-- TODO: confirm -->.git
cd my-futuristic-portfolio

# 2. Install dependencies
npm install

# 3. Copy the example env file and fill in your key
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `RESEND_API_KEY` | Authenticates the `POST /api/send` route with the Resend email service | `re_xxxxxxxxxxxxxxxx` |

> **Note:** The recipient email address inside `app/api/send/route.ts` is hard-coded (`tyagivansh372@gmail.com`). Replace it with your own address before deploying. <!-- TODO: confirm -->

### Running the Email Route Locally

The contact form will throw a `500` without a valid `RESEND_API_KEY`. Sign up at [resend.com](https://resend.com) (free tier available), create an API key, and add it to `.env.local`.

---

## npm Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server with hot reload |
| `npm run build` | Create an optimised production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint across the project |

---

## Testing

There are **no test files or test scripts** in this project at this time.

**Planned approach:**
- Add `jest` + `@testing-library/react` for component unit tests (Skills grid, Contact form validation states).
- Add an API route integration test for `POST /api/send` covering success, missing-field, and Resend-error paths.
- Add `npm test` to `package.json` scripts.

---

## Deployment

The project is configured for **Vercel** (the `vercel.svg` asset in `public/` and the `create-next-app` boilerplate README both confirm this intent). <!-- TODO: confirm live Vercel project URL -->

```bash
# Build command (run automatically by Vercel)
npm run build

# Output directory: .next (Next.js default)
```

In the Vercel dashboard, add `RESEND_API_KEY` under **Project → Settings → Environment Variables** before deploying.

---

## Design Decisions

- **SSR + Client Components** — the 3D canvas and all interactive sections use `"use client"` to allow `useFrame`, scroll listeners, and Framer Motion to run in the browser. The root layout stays on the server for SEO metadata and font loading.
- **Raw GLSL shaders over declarative materials** — `DigitalOcean.tsx` implements a custom `THREE.ShaderMaterial` with a vertex shader (two-octave Simplex noise for wave displacement) and a fragment shader (height-based colour ramp + procedural grid overlay) rather than relying on a drei helper, giving full control over the wireframe aesthetic.
- **`useMemo` on shader uniforms** — uniform objects are created once; `useFrame` mutates `uniforms.uTime.value` directly (bypassing React re-renders) for maximum per-frame throughput on the 160 × 160 plane.
- **Scroll progress via native `window` listener** — `NavalVessel.tsx` subscribes to `scroll` events with `{ passive: true }` and `THREE.MathUtils.lerp` to smooth the ship's Z position, avoiding a dependency on Lenis' scroll callbacks and preventing a "dual scrollbar" conflict.
- **Zod schema-driven form validation** — a single `zod` schema in `Contact.tsx` (enforced by `@hookform/resolvers`) gates every submission on the client before the fetch call reaches the API route; the server-side guard in `route.ts` adds a second lightweight presence check on `name`, `email`, and `message` fields.

---

## Roadmap

- [ ] Mount the existing `DataDrone` component inside `Scene.tsx`
- [ ] Replace hard-coded recipient email with a `RESEND_RECIPIENT_EMAIL` environment variable
- [ ] Add `engines` field to `package.json` and a `.nvmrc` to pin the Node.js version
- [ ] Add screenshot assets to `/docs` and update the Screenshots section above
- [ ] Configure Jest and add unit tests for form validation and the API route
- [ ] Add a GitHub Actions CI workflow to run lint and tests on every PR
- [ ] Add an `opengraph-image.tsx` Next.js route for rich social link previews

---

## Contact



*Name Vansh Tyagi 
Portfolio:- https://portfolio-orcin-seven-25.vercel.app/
LinkedIn https://www.linkedin.com/in/vansh-tyagi-069365328

