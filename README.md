# Portfolio Frontend

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans, JetBrains Mono

## 📁 Project Structure

```
portfolio-frontend/
├── app/
│   ├── globals.css      # Global styles & Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Navigation component
│   │   └── Footer.tsx   # Footer component
│   ├── sections/
│   │   ├── Hero.tsx     # Hero section
│   │   ├── About.tsx    # About section (Bento grid)
│   │   ├── TechStack.tsx # Tech stack section
│   │   ├── Projects.tsx # Projects section
│   │   ├── Experience.tsx # Experience timeline
│   │   └── Contact.tsx  # Contact section
│   └── index.ts         # Component exports
├── lib/
│   └── utils.ts         # Utility functions
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone or copy the project files

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Colors
Edit the colors in `tailwind.config.ts`:
```ts
colors: {
  accent: {
    primary: "#3b82f6",    // Main accent (blue)
    secondary: "#8b5cf6",  // Secondary accent (purple)
    green: "#10b981",      // Success/status
    orange: "#f97316",     // Highlight
  },
}
```

### Content
Update the content in each section component:
- `components/sections/About.tsx` - Your bio and stats
- `components/sections/TechStack.tsx` - Your technologies
- `components/sections/Projects.tsx` - Your projects
- `components/sections/Experience.tsx` - Your work history
- `components/sections/Contact.tsx` - Your social links

### Metadata
Update SEO metadata in `app/layout.tsx`

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy

### Other Platforms
Build the project and deploy the `.next` folder or use the static export:
```bash
npm run build
```

## 📝 Next Steps

1. **Connect to Laravel API** - Update components to fetch data from your CMS
2. **Add images** - Replace placeholder with actual photos/screenshots
3. **Add animations** - Consider adding Framer Motion for more animations
4. **Add blog section** - If needed for your portfolio

## 📄 License

MIT License
