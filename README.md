# Harsh Singh — Java Full Stack Developer Portfolio

<div align="center">

![Harsh Singh Portfolio Banner](https://img.shields.io/badge/Java%20Full%20Stack-Developer%20Portfolio-0d9488?style=for-the-badge)
![React](https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot%203.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**A high-performance, cinematic, and responsive developer portfolio engineered for Java & React full-stack systems.**

[View Live Portfolio](http://localhost:5175) • [Download Resume](file:///e:/portfolioo/harsh-portfolio/public/Harsh_Singh_Resume.pdf) • [Explore Projects](#-featured-projects)

</div>

---

## 🌟 Overview & Architecture

This portfolio is built with a modern dark-slate aesthetic (`#0B1121`), subtle glassmorphism (`backdrop-blur-2xl`), interactive Framer Motion animations, and full accessibility support (`prefers-reduced-motion`). It highlights enterprise Java microservices, distributed data architectures, modern React interfaces, and production-grade software deployments.

---

## 🚀 Sections & Features

### 1. Navigation Header (`Navbar.jsx`)
- **Monogram Branding**: Sleek glowing `HS` monogram logo with emerald/teal ambient illumination.
- **Ordered Navigation Links**: `Home` → `Skills` → `Projects` → `About` → `Contact` with smooth scrolling (`react-scroll`).
- **Interactive Action**: `[Let's Talk]` CTA button linking directly to collaboration channels.
- **Mobile Responsive Drawer**: Glassmorphism mobile menu with animated hamburger toggle.

### 2. Centered Editorial Hero (`Hero.jsx`)
- **Eyebrow Tag**: `JAVA FULL STACK DEVELOPER` with subtle pulsing neon dot.
- **Headline**: `"Hi, I'm Harsh Singh"`.
- **Dynamic Keyword Reel**: Smooth vertical slide transition showcasing:
  - `⚡ Scalable Backends`
  - `☁️ Cloud Microservices`
  - `⚛️ Modern Web Apps`
  - `🚀 High-Throughput APIs`
- **Action Buttons**:
  - `[EXPLORE WORK]`: Smooth scroll to production projects.
  - `[Download Resume]`: Direct download linking to `/Harsh_Singh_Resume.pdf`.
- **Centerpiece Portrait Halo**: Reusable portrait element overlapping glowing concentric rings with 3D mouse parallax on desktop.
- **Floating Status Badges**: Minimalist pills (`Microservices`, `99.9% Uptime`).

### 3. Technical Arsenal & Skills (`Skills.jsx`)
- **8 Core Production Technologies**:
  - **Core Backend**: `Java 17/21+`, `Spring Boot 3.x`, `Microservices (Distributed Architecture)`
  - **Frontend & UI**: `React.js (18+ / Hooks)`, `JavaScript (ES6+)`
  - **Database & Cache**: `MySQL (Relational)`, `Redis (In-Memory Microsecond Cache)`
  - **Cloud Infrastructure**: `AWS (EC2 & S3)`
- **Responsive Layout**:
  - **Desktop / Tablet**: Modern 3D Bento Glassmorphism Grid with dynamic brand hover glows and interactive category filter tabs (`All`, `Backend`, `Frontend`, `Database`, `AWS Cloud`).
  - **Mobile (Phone)**: Clean 2-column compact symbol badges (`grid-cols-2`) optimized for readability without distracting ticker animations.

### 4. Featured Projects Showcase (`Projects.jsx` & `src/data/projects.js`)
Presents six production-grade projects in exact sequence with high-resolution dashboard previews, window chrome controls, and live demo links:

| # | Project Title | Slug | Tech Stack | Live Demo | Image Preview |
|---|---------------|------|------------|-----------|---------------|
| **01** | **AI Resume** | `ai-resume` | Spring Boot, React.js, JWT, AI, MySQL | [careersneakers.com](https://careersneakers.com) | `careersneaker.jpg` |
| **02** | **FlowSpace** | `flowspace` | Spring Boot, React.js, Redis, Docker | [flowspace.co.in](https://flowspace.co.in) | `flowspace.jpg` |
| **03** | **CloudBillBox** | `cloudbillbox` | Java / Spring Boot, React, RBAC, AWS S3, PostgreSQL | [cloudbillbox.com](https://cloudbillbox.com) | `cloudbillbox.jpg` |
| **04** | **TruForce** | `truforce` | Java, Spring Boot, REST APIs, MySQL, Docker | *Internal System* | `truforce.jpg` (Live GPS Tracking Dashboard) |
| **05** | **Medicine Shop** | `medicine-shop` | React.js, Java, Spring Boot, MySQL | *Internal System* | `medicineshop.jpg` (Pharmacy & Inventory Dashboard) |
| **06** | **CropConnect** | `cropconnect` | React.js, Spring Boot, WebSockets, PostgreSQL | *Demo Platform* | `agrinexus.jpg` (Marketplace Dashboard) |

- **UI Window Frame**: Real browser top bar with `🔴 🟡 🟢` window controls, domain names, and zoom-on-hover effect.
- **Conditional Live Demos**: `LIVE DEMO ↗` button appears only when a verified production URL exists.
- **Case Study Navigation**: Standardized `EXPLORE CASE STUDY →` linking to `/projects/:slug`.

### 5. Awwwards-Style About Me (`About.jsx`)
- **Glassmorphism 3D Floating Container**: Massive card with pulsing ambient teal back-glow.
- **Cinematic Heading**: `"Behind the Code"` with gradient typography and glowing teal accent line.
- **Narrative Copy**:
  - Highlights strong foundation with a **B.Tech in Computer Science Engineering**.
  - Philosophy of building robust Java microservices and React frontends that solve real-world, grassroots-level challenges.
- **Core Engineering Pillars**: `Clean Code`, `Scalable Architecture`, `Secure APIs`, `User Delight`.
- **Floating Logic Visual**: Stylized code-architecture graphic (`SystemArchitecture.java`) illustrating Spring Boot backend meeting React UI (hidden on phone, shown on desktop).

### 6. Compact Collaboration Contact Hub (`Contact.jsx`)
- **Compact Glassmorphic Card**: Proportional, centered layout (`max-w-2xl`).
- **Real Developer Avatar**: Connected directly to `public/harsh_profile.jpg` (`public/image/harsh (2).jpg`) with a live green status beacon (`● Online / Open for Full-Time Roles`).
- **Primary CTA**: Glowing **`[Drop me an Email]`** (`mailto:contact@harshsingh.dev`).
- **Direct Badges & Channels**: Email link, phone inquiry pill, and interactive LinkedIn & GitHub buttons.

### 7. Minimal 1-Line Footer (`Footer.jsx`)
- **Left**: `🟢 Harsh Singh • Java Full Stack Developer`
- **Center**: `© 2026 Harsh Singh. All rights reserved.`
- **Right**: Smooth-scrolling **`[Back to top ↑]`** button.

---

## 📂 Project Directory Structure

```text
harsh-portfolio/
├── public/
│   ├── image/
│   │   └── harsh (2).jpg          # Original high-res developer portrait
│   ├── projects/
│   │   ├── agrinexus.jpg          # CropConnect marketplace dashboard UI
│   │   ├── careersneaker.jpg      # AI Resume builder dashboard UI
│   │   ├── cloudbillbox.jpg       # Cloud SaaS billing & POS dashboard UI
│   │   ├── flowspace.jpg          # Workforce coordination dashboard UI
│   │   ├── medicineshop.jpg       # Pharmacy e-commerce dashboard UI
│   │   └── truforce.jpg           # Live GPS tracking system dashboard UI
│   ├── resume/
│   │   └── harsh singh.pdf        # Verified PDF resume file
│   ├── harsh_profile.jpg          # Linked developer avatar photo
│   └── Harsh_Singh_Resume.pdf     # Direct resume download link
├── src/
│   ├── assets/
│   │   └── hero.png               # Developer 3D illustration asset
│   ├── components/
│   │   ├── About.jsx              # Awwwards-style editorial About section
│   │   ├── Background.jsx         # Ambient background lighting layer
│   │   ├── Contact.jsx            # Compact contact card with developer photo
│   │   ├── Footer.jsx             # Minimalist 1-line footer with back-to-top
│   │   ├── Hero.jsx               # Centered cinematic Hero section
│   │   ├── Navbar.jsx             # HS monogram navbar with drawer
│   │   ├── Projects.jsx           # 6 Featured project dashboard window cards
│   │   └── Skills.jsx             # 3D bento tech stack & mobile symbol cards
│   ├── data/
│   │   └── projects.js            # Single source of truth for project data
│   ├── App.jsx                    # Root layout & section flow
│   ├── index.css                  # Tailwind styles & custom fonts
│   └── main.jsx                   # React DOM entry point
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🛠 Tech Stack

- **Frontend Core**: React 18 + JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Motion & Parallax**: Framer Motion
- **Navigation & Scrolling**: React Scroll
- **Icons**: Lucide React + Inline Optimized SVGs

---

## 💻 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/harsh-portfolio.git
cd harsh-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```

The application will be available at `http://localhost:5175/` (or your assigned Vite port).

### 4. Build for production
```bash
npm run build
```

---

<div align="center">

**Crafted with precision by Harsh Singh • Java Full Stack Developer**

</div>
