# Servant - Full-Service Digital Agency

A modern, production-ready Next.js 16 website for Servant, a full-service agency helping leaders amplify their mission through strategy, technology, and transformative digital experiences.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff69b4)

## 🚀 Features

- **Modern Stack**: Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS 4
- **Stunning Animations**: Smooth animations powered by Framer Motion
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Theme**: Beautiful dark theme with gradient accents
- **Component Library**: Reusable, production-ready components
- **SEO Optimized**: Built-in metadata and SEO best practices
- **Fast Performance**: Optimized for Core Web Vitals

## 📁 Project Structure

```
datamills/
├── app/
│   ├── about/           # About page
│   ├── careers/         # Careers page
│   ├── contact/         # Contact page
│   ├── insights/        # Blog/Insights page
│   ├── podcast/         # Podcast page
│   ├── privacy/         # Privacy policy
│   ├── services/        # Services page
│   ├── work/            # Case studies page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── loading.tsx      # Loading component
│   ├── not-found.tsx    # 404 page
│   └── page.tsx         # Home page
├── components/
│   ├── CaseStudies.tsx  # Case studies section
│   ├── CoreOfferings.tsx # Core offerings section
│   ├── CountUp.tsx      # Animated counter
│   ├── Footer.tsx       # Footer component
│   ├── Header.tsx       # Header/Navigation
│   ├── Hero.tsx         # Hero section
│   ├── ImpactStats.tsx  # Statistics section
│   ├── PainPoints.tsx   # Pain points section
│   ├── Partners.tsx     # Partner logos marquee
│   ├── Process.tsx      # Process steps
│   ├── ScheduleCall.tsx # CTA calendar section
│   ├── Services.tsx     # Services grid
│   ├── Testimonials.tsx # Testimonials slider
│   ├── WhyUs.tsx        # Why choose us section
│   └── index.ts         # Component exports
└── public/              # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd datamills
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

Update the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #7c3aed;        /* Purple */
  --secondary: #06b6d4;      /* Cyan */
  --accent: #f59e0b;         /* Amber */
  --background: #0a0a0f;     /* Dark background */
  --card-bg: #1a1a24;        /* Card background */
}
```

### Fonts

The project uses:
- **Outfit** - Primary sans-serif font
- **Poppins** - Secondary font

Update fonts in `app/layout.tsx`.

## 🧩 Components

All components are built with:
- TypeScript for type safety
- Framer Motion for animations
- Tailwind CSS for styling
- Lucide React for icons

### Key Components

| Component | Description |
|-----------|-------------|
| `Header` | Responsive navigation with mobile menu |
| `Hero` | Animated hero section with CTA |
| `ImpactStats` | Animated statistics with CountUp |
| `Partners` | Logo marquee carousel |
| `Services` | Service cards grid |
| `Testimonials` | Auto-playing testimonial slider |
| `CaseStudies` | Portfolio grid with hover effects |
| `Footer` | Multi-column footer with CTA |

## 📱 Pages

- `/` - Home page
- `/about` - About page
- `/services` - Services overview
- `/work` - Portfolio/Case studies
- `/insights` - Blog articles
- `/podcast` - Podcast episodes
- `/careers` - Job listings
- `/contact` - Contact form
- `/privacy` - Privacy policy

## 🚢 Deployment

The app can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
```bash
npx vercel
```

### Docker
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by Servant
