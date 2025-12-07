import { Code, Smartphone, Palette, Database, Cloud, Zap } from "lucide-react";

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies.",
    features: ["React & Next.js", "Laravel & PHP", "RESTful APIs", "Responsive Design"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Creating robust server-side solutions with secure databases and APIs.",
    features: ["MySQL & PostgreSQL", "API Integration", "Authentication", "Data Management"],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Transforming designs into pixel-perfect, interactive user interfaces.",
    features: ["Tailwind CSS", "Component Libraries", "Animations", "Accessibility"],
  },
  {
    icon: Smartphone,
    title: "Full-Stack Solutions",
    description: "End-to-end application development from database to user interface.",
    features: ["Frontend + Backend", "Database Design", "Deployment", "Maintenance"],
  },
  {
    icon: Zap,
    title: "Custom Development",
    description: "Building tailored solutions for specific business needs.",
    features: ["School Management", "LMS Systems", "Admin Panels", "Business Tools"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-16">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <p className="section-label">// Services</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
          What I can do for you
        </h2>
        <p className="text-foreground-secondary max-w-2xl mx-auto">
          Comprehensive development services to bring your ideas to life
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="card p-6 hover:scale-105 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-foreground-secondary text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-foreground-secondary flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}