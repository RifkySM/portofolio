import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-16 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-accent-primary/15 blur-[150px] -top-[200px] right-[10%]" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-accent-secondary/15 blur-[150px] -bottom-[200px] left-[5%]" />

      {/* Content */}
      <div className="max-w-3xl relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background-card border border-border rounded-full text-sm text-foreground-secondary mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
          Available for new opportunities
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in-up animation-delay-100">
          I build things
          <br />
          for the <span className="gradient-text">web.</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-foreground-secondary max-w-xl mb-10 animate-fade-in-up animation-delay-200">
          Full-stack developer specializing in React & Laravel. Creating
          scalable applications with clean architecture and exceptional user
          experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
          {/*<button className="btn-secondary">Download CV</button>*/}
        </div>
      </div>
    </section>
  );
}
