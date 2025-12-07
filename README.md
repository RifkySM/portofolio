# Portfolio Website - Rifky Saputra Maylandra

A modern, responsive portfolio website showcasing full-stack development projects and skills. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a clean design with smooth animations and interactive components.

## ✨ Features

- 🎨 **Modern UI Design** - Clean, minimalist interface with gradient accents
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🖼️ **Image Carousel** - Interactive project gallery with multiple images
- ⚡ **Smooth Navigation** - Scroll-to-section with active link highlighting
- 🎯 **Bento Grid Layout** - Modern about section with stats
- 🌈 **Gradient Effects** - Subtle background glows and animations
- 💼 **Project Showcase** - Detailed project cards with tags and live demos
- 📊 **Experience Timeline** - Visual work history presentation
- 🎓 **Education Section** - Academic background display
- 📧 **Contact Integration** - Social links and email contact
- 🔍 **SEO Optimized** - Proper metadata and semantic HTML

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom React components
- **Icons:** Lucide React, React Bootstrap Icons
- **Image Optimization:** Next.js Image component
- **Fonts:** Plus Jakarta Sans, JetBrains Mono
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
portfolio-frontend/
├── app/
│   ├── globals.css         # Global styles & Tailwind imports
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation with scroll detection
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── About.tsx       # About section (Bento grid)
│   │   ├── TechStack.tsx   # Tech stack with icons
│   │   ├── Services.tsx    # Services offered
│   │   ├── Projects.tsx    # Projects with image carousel
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Education.tsx   # Educational background
│   │   └── Contact.tsx     # Contact info & social links
│   └── index.ts            # Component exports
├── lib/
│   └── utils.ts            # Utility functions (cn)
├── public/
│   ├── mypic.webp          # Profile picture
│   └── projects/           # Project screenshots
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RifkySM/portofolio.git
cd portofolio
```

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

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

- **`components/sections/Hero.tsx`** - Main heading, description, and CTA buttons
- **`components/sections/About.tsx`** - Personal bio and statistics
- **`components/sections/TechStack.tsx`** - Technologies and tools you use
- **`components/sections/Services.tsx`** - Services you offer
- **`components/sections/Projects.tsx`** - Your projects with images, descriptions, and tags
- **`components/sections/Experience.tsx`** - Work experience timeline
- **`components/sections/Education.tsx`** - Educational background
- **`components/sections/Contact.tsx`** - Social links and email
- **`components/layout/Navbar.tsx`** - Navigation links and branding

### Metadata & SEO

Update SEO metadata in `app/layout.tsx`:
```ts
export const metadata: Metadata = {
  title: "Your Name | Full-Stack Developer",
  description: "Your description here",
  keywords: ["developer", "react", "laravel", ...],
}
```

### Images

Replace images in the `public/` folder:
- `public/mypic.webp` - Your profile picture
- `public/projects/*.webp` - Your project screenshots

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

## 🎯 Key Components

### Project Image Carousel
The `Projects.tsx` component features an interactive image carousel:
- Navigation arrows on hover
- Dot indicators for quick navigation
- Responsive image loading with Next.js Image
- Support for multiple images per project

### Smooth Navigation
The `Navbar.tsx` includes:
- Scroll-to-section functionality with anchor links
- Active section highlighting using Intersection Observer
- Smooth scroll behavior
- Responsive design with mobile optimization

### Responsive Design
All sections are fully responsive with:
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Optimized layouts for all screen sizes

## 📝 Featured Projects

The portfolio currently showcases:
- **Curaweda Palagan Innotech** - Software house landing page (Next.js, Tailwind CSS)
- **DT Peduli Ramadhan 2025** - Charity campaign landing page (HTML, CSS, JS)
- **KBPayuk CMS** - Full-stack CMS with REST API (NestJS, Next.js)
- **STIN SIAKAD** - Academic information system (Laravel, PostgreSQL)
- **School Administration & LMS** - Integrated school management platform (Laravel, MySQL)

## 👨‍💻 Author

**Rifky Saputra Maylandra**
- GitHub: [@RifkySM](https://github.com/RifkySM)
- LinkedIn: [Rifky Saputra Maylandra](https://www.linkedin.com/in/rifky-saputra-maylandra-848a1a372)
- Instagram: [@rifky.saputram](https://www.instagram.com/rifky.saputram)
- Email: andra04mei05@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/RifkySM/portofolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📄 License

MIT License

---

Built with ❤️ using Next.js and Tailwind CSS
