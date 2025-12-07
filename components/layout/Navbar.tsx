"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 py-4 flex justify-between items-center transition-all duration-300",
        scrolled
          ? "bg-background-primary/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center font-bold text-sm text-white">
          R
        </div>
        <span className="font-bold text-lg">Rifky Saputa Maylandra</span>
      </Link>

      {/* Nav Links - Desktop */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative group",
                activeSection === link.href
                  ? "text-accent-primary scale-105"
                  : "text-foreground-secondary hover:text-foreground-primary hover:scale-105"
              )}
            >
              {link.label}
              {/* Animated underline */}
              <span
                className={cn(
                  "absolute bottom-[-4px] left-0 h-[2px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full transition-all duration-300 ease-out",
                  activeSection === link.href
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
                )}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a href="#contact" className="px-5 py-2.5 bg-foreground-primary text-background-primary rounded-lg text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all duration-300">
        Let's Talk
      </a>
    </nav>
  );
}
