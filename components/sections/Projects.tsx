"use client";

import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  images?: string[];
};

const projects: Project[] = [
  {
    title: "Curaweda Palagan Innotech - Software House Landing Page",
    description: "A modern and responsive company profile website for PT Curaweda built with Next.js, React, and Tailwind CSS. Features a minimalist design optimized for user experience, fast performance, and SEO. Showcases the company's commitment to delivering innovative and high-quality digital solutions with a focus on efficiency and client satisfaction.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Responsive Design", "Figma"],
    liveUrl: "https://landing-page-curaweda.vercel.app/",
    images: ["projects/LP-Curaweda.webp", "projects/LP-Curaweda 2.webp"]
  },
  {
    title: "DT Peduli Ramadhan 2025 - Charity Campaign Landing Page",
    description:
      "A clean and user-friendly landing page for the DT Peduli Ramadhan 2025 charity campaign. Designed to provide easy access to program information, event schedules, and donation methods. Features intuitive navigation and a soft color palette that creates a comfortable user experience for sharing blessings during Ramadan.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vanilla JS", "Vercel", "Figma"],
    liveUrl: "https://main-xi-taupe.vercel.app/",
    images: ["projects/Ramadhan Peduli Negeri 1.webp", "projects/Ramadhan Peduli Negeri 2.webp", "projects/Ramadhan Peduli Negeri 3.webp"]
  },
  {
    title: "KBPayuk - CMS & Landing Page with REST API",
    description: "A full-stack content management system with a responsive landing page. Built with NestJS for the REST API backend and Next.js for the frontend, enabling efficient content management and dynamic information display. Features modern architecture with separation of concerns and scalable design.",
    tags: ["Next.js", "React", "TypeScript", "NestJS", "REST API", "Node.js", "Vercel", "Figma"],
    liveUrl: "https://portofolio-kbp-lp.vercel.app/",
    images: ["projects/KBP 1.webp", "projects/KBP 2.webp"]
  },
  {
    title: "STIN Academic Information System (SIAKAD)",
    description: "A comprehensive academic information system for higher education institutions built with Laravel and PostgreSQL. Manages student, lecturer, and administrative records with features including course registration (KRS) and grade recording. Designed to streamline and automate academic processes for improved efficiency.",
    tags: ["Laravel", "PHP", "PostgreSQL", "MVC", "Blade", "Monolith", "Figma"],
    images: ["projects/STIN 1.webp"]
  },
  {
    title: "School Administration & LMS Platform",
    description: "An integrated school administration and learning management system built with Laravel. Combines academic and financial management features with a complete LMS. Developed using Git version control and deployed on Azure cloud platform for efficient collaboration and scalability.",
    tags: ["Laravel", "PHP", "MySQL", "jQuery", "JavaScript", "LMS", "Azure", "Git", "MVC", "Figma"],
    images: ["projects/YRJ 1.webp", "projects/YRJ.jpeg"]
  },
];

function ProjectImageCarousel({ images, featured }: { images?: string[]; featured?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div
        className={cn(
          "aspect-video bg-gradient-to-br from-background-primary to-background-secondary flex items-center justify-center",
          featured && "lg:aspect-[21/9]"
        )}
      >
        <span className="text-foreground-muted font-mono text-xs tracking-widest">
          PROJECT PREVIEW
        </span>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group/carousel">
      <div
        className={cn(
          "aspect-video relative overflow-hidden bg-background-primary",
          featured && "lg:aspect-[21/9]"
        )}
      >
        <Image
          src={`/${images[currentIndex]}`}
          alt="Project screenshot"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background-primary/80 hover:bg-background-primary text-foreground-primary p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background-primary/80 hover:bg-background-primary text-foreground-primary p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-accent-primary w-6"
                    : "bg-foreground-muted/50 hover:bg-foreground-muted"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-16 bg-background-secondary">
      {/* Section Header */}
      <div className="mb-12">
        <p className="section-label">// Projects</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
          Featured work
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "card overflow-hidden group hover:border-accent-primary hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]",
              project.featured && "lg:col-span-2"
            )}
          >
            {/* Thumbnail */}
            <ProjectImageCarousel images={project.images} featured={project.featured} />

            {/* Content */}
            <div className="p-5">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background-secondary rounded-md font-mono text-xs text-accent-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-foreground-secondary text-sm mb-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <Link
                      target="_blank"
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-foreground-secondary hover:text-accent-primary text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-foreground-secondary hover:text-accent-primary text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
