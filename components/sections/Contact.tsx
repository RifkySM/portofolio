import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import {Instagram} from "react-bootstrap-icons";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/RifkySM",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rifky-saputra-maylandra-848a1a372",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rifky.saputram?igsh=eWpwN3Z1bGY2aDA1",
    icon: Instagram,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 bg-background-secondary">
      <div className="max-w-xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-10">
          <p className="section-label">// Contact</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Let's work together
          </h2>
          <p className="text-foreground-secondary">
            Got a project in mind? I'd love to hear about it.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-8">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-14 h-14 bg-background-card border border-border rounded-xl flex items-center justify-center text-foreground-secondary hover:text-accent-primary hover:border-accent-primary hover:-translate-y-1 transition-all"
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        {/* Email */}
        <Link
          href="mailto:andra04mei05@gmail.com"
          className="text-2xl lg:text-3xl font-bold hover:gradient-text transition-all inline-block"
        >
          andra04mei05@gmail.com
        </Link>
      </div>
    </section>
  );
}
