# Mohit Sharma — Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Mohit%20Sharma-Full%20Stack%20Developer-2563ff?style=for-the-badge&labelColor=0f1629)

**A clean, fast, fully hand-coded portfolio — no frameworks, no build tools, just pure HTML, CSS & JavaScript.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-2563ff?style=flat-square&logo=vercel&logoColor=white)](https://mohit-sharma.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-mohit--git1-0f1629?style=flat-square&logo=github&logoColor=white)](https://github.com/mohit-git1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohit--sharma-0a66c2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohit-sharma-3742773aa/)

</div>

---

## ✦ Preview

> Cream & navy design with electric blue accents — editorial feel, fast load, zero dependencies.

```
┌─────────────────────────────────────────────────────┐
│  ●  Mohit.           About  Projects  Skills  Contact│
├─────────────────────────────────────────────────────┤
│                                                      │
│              Mohit                                   │
│             Sharma          ← hero                   │
│                                                      │
│   Full-stack developer obsessed with building        │
│   products that are fast, functional, and            │
│   actually enjoyable to use.                         │
│                                                      │
├──────────────┬──────────────────────────────────────┤
│  About       │  Projects (dark navy cards)           │
├──────────────┼──────────────────────────────────────┤
│  Skills grid │  Contact (two-column)                 │
└─────────────────────────────────────────────────────┘
```

---

## ✦ Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS3 with custom properties |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Instrument Serif · Plus Jakarta Sans · JetBrains Mono |
| Hosting | Vercel |
| Build tool | **None** — open `index.html` and go |

---

## ✦ Project Structure

```
mohit-portfolio/
│
├── index.html                 ← Entry point — all sections live here
│
├── css/
│   ├── base.css               ← CSS variables, reset, fonts, buttons, tags
│   ├── navbar.css             ← Fixed navigation bar
│   ├── hero.css               ← Hero section, dot grid, blob gradients
│   ├── about.css              ← About grid, avatar card, pills
│   ├── projects.css           ← Project cards on dark navy background
│   ├── skills.css             ← 3-column skill boxes
│   ├── contact.css            ← Two-column contact layout
│   ├── animations.css         ← Scroll-triggered fade-up animations
│   └── responsive.css         ← Mobile breakpoints (≤900px, ≤560px)
│
├── js/
│   ├── utils.js               ← Sets copyright year
│   ├── scrollAnimations.js    ← IntersectionObserver for .fade-up
│   └── heroAnimation.js       ← Hero name entrance animation
│
├── sections/                  ← Standalone HTML partials (reference)
│   ├── navbar.html
│   ├── hero.html
│   ├── about.html
│   ├── projects.html
│   ├── skills.html
│   └── contact.html
│
└── assets/
    └── icons/                 ← Drop SVG/PNG icons here
```

---

## ✦ Sections

### 🏠 Hero
Large serif name with italic blue accent, animated entrance, pulsing "Open to opportunities" badge, dot grid background, and soft blob gradients.

### 👤 About
Two-column layout — a card on the left with monogram, availability status, and skill pills, and a personal bio on the right.

### 🛡️ Projects — Sentinel AI
Two featured projects displayed as dark navy cards against the navy background for contrast:

| # | Project | Stack |
|---|---------|-------|
| 01 | **Sentinel AI — Automated PR Code Reviewer** | React · TypeScript · Node.js · Express · PostgreSQL · OpenAI GPT-4o · GitHub API · Webhooks · Monaco Editor |
| 02 | **Sentinel AI — Smart Stack Overflow Search** | React · TypeScript · Node.js · Express · PostgreSQL · OpenAI Embeddings · Stack Exchange API · Recharts |

### ⚡ Skills
Six white skill boxes in a 3-column grid — Languages, Frontend, Backend, Databases & ORM, Tools & Platforms, AI & APIs.

### 📬 Contact
Split layout: call-to-action text + buttons on the left, dark info card with email / LinkedIn / GitHub on the right.

---

## ✦ Getting Started

No installs. No build step. Just:

```bash
# Clone the repo
git clone https://github.com/mohit-git1/portfolio.git

# Open in browser
open index.html
# or just drag index.html into your browser
```

---

## ✦ Customisation

| What to update | Where |
|----------------|-------|
| Name, bio, tagline | `index.html` — hero & about sections |
| Email / LinkedIn / GitHub | `index.html` — contact section & nav |
| Add a project | `index.html` — projects grid |
| Change colours | `css/base.css` — `:root` variables |
| Change fonts | `css/base.css` — Google Fonts import + `--font-*` vars |
| Tweak animations | `css/animations.css` |
| Mobile layout | `css/responsive.css` |

### Colour Palette

```css
--cream:  #f5f0e8   /* page background     */
--white:  #fdfcfa   /* card backgrounds    */
--navy:   #0f1629   /* headings, dark bgs  */
--blue:   #2563ff   /* primary accent      */
--teal:   #0ea5a0   /* secondary accent    */
--muted:  #6b7080   /* body text / labels  */
```

---

## ✦ Deployment on Vercel

1. Push to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your repo
4. Framework preset → **Other**
5. Output directory → `.` (root)
6. Click **Deploy** ✓

Auto-deploys on every push to `main`.

---

## ✦ Contact

| | |
|-|-|
| 📧 Email | [mohitsharma2826@gmail.com](mailto:mohitsharma2826@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/mohit-sharma-3742773aa](https://www.linkedin.com/in/mohit-sharma-3742773aa/) |
| 🐙 GitHub | [github.com/mohit-git1](https://github.com/mohit-git1) |

---

<div align="center">

Designed & built by **Mohit Sharma** · MIT License

</div>