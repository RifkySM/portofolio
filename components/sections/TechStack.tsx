import { cn } from "@/lib/utils";
import {
  CodeSlash,
  TriangleFill,
  FileCodeFill,
  PaletteFill,
  Tools,
  CircleFill,
  Server,
  PlugFill,
  Database,
  BarChartFill,
  CloudFill,
  Git,
  BoxSeam,
  Mailbox,
  Terminal,
  Rocket, Bootstrap, Javascript, Typescript,
} from "react-bootstrap-icons";

type TechCategory = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "orange";
  technologies: {
    name: string;
    icon: React.ReactNode;
    years: string;
  }[];
};

const categories: TechCategory[] = [
  {
    title: "Frontend",
    subtitle: "Building interfaces",
    icon: <CodeSlash />,
    color: "blue",
    technologies: [
      { name: "HTML", icon: <CodeSlash />, years: "3y" },
      { name: "React", icon: <CodeSlash />, years: "2y" },
      { name: "Next.js", icon: <TriangleFill />, years: "2y" },
      { name: "TypeScript", icon: <FileCodeFill />, years: "1y" },
      { name: "Tailwind", icon: <PaletteFill />, years: "3y" },
      { name: "Bootstrap", icon: <Bootstrap />, years: "3y" },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server & APIs",
    icon: <Tools />,
    color: "green",
    technologies: [
      { name: "Laravel", icon: <CircleFill className="text-red-500" />, years: "3y" },
      { name: "PHP", icon: <Server />, years: "4y" },
      { name: "Node.js", icon: <CircleFill className="text-green-500" />, years: "2y" },
      { name: "REST API", icon: <PlugFill />, years: "3y" },
      { name: "Javascript", icon: <Javascript />, years: "1y" },
      { name: "Typescript", icon: <Typescript />, years: "1y" },
    ],
  },
  {
    title: "Database",
    subtitle: "Data management",
    icon: <Database />,
    color: "orange",
    technologies: [
      { name: "PostgreSQL", icon: <Database />, years: "2y" },
      { name: "MySQL", icon: <Database />, years: "3y" },
      { name: "SQL Server", icon: <BarChartFill />, years: "2y" },
      { name: "Redis", icon: <CloudFill />, years: "2y" },
    ],
  },
];

const tools = [
  { name: "Git", icon: <Git /> },
  { name: "Docker", icon: <BoxSeam /> },
  { name: "VS Code", icon: <CodeSlash /> },
  { name: "Figma", icon: <PaletteFill /> },
  { name: "Postman", icon: <Mailbox /> },
  { name: "Linux", icon: <Terminal /> },
  { name: "AWS", icon: <CloudFill /> },
  { name: "Vercel", icon: <Rocket /> },
];

const colorClasses = {
  blue: {
    icon: "bg-accent-primary",
    bar: "from-accent-primary",
  },
  green: {
    icon: "bg-accent-green",
    bar: "from-accent-green",
  },
  orange: {
    icon: "bg-accent-orange",
    bar: "from-accent-orange",
  },
};

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 lg:px-16">
      {/* Section Header */}
      <div className="mb-12">
        <p className="section-label">// Tech Stack</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
          Technologies I work with
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <div
            key={category.title}
            className="card p-6 relative overflow-hidden group"
          >
            {/* Top color bar on hover */}
            <div
              className={cn(
                "absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity",
                colorClasses[category.color].bar,
                "to-transparent"
              )}
            />

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center text-xl",
                  colorClasses[category.color].icon
                )}
              >
                {category.icon}
              </div>
              <div>
                <h3 className="font-semibold">{category.title}</h3>
                <span className="text-foreground-muted text-sm">
                  {category.subtitle}
                </span>
              </div>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 gap-2">
              {category.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 p-3 bg-background-secondary rounded-lg hover:bg-background-card-hover hover:translate-x-1 transition-all"
                >
                  <span className="w-7 h-7 bg-background-card rounded-md flex items-center justify-center text-sm">
                    {tech.icon}
                  </span>
                  <span className="text-sm font-medium">{tech.name}</span>
                  <span className="ml-auto font-mono text-xs text-foreground-muted bg-background-primary px-1.5 py-0.5 rounded">
                    {tech.years}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools Row */}
      <div className="card p-5 mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <span className="text-foreground-muted text-sm font-medium whitespace-nowrap">
          Also working with:
        </span>
        <div className="flex flex-wrap gap-2 flex-1">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 px-3 py-2 bg-background-secondary border border-border rounded-lg text-sm text-foreground-secondary hover:border-accent-primary hover:text-foreground-primary transition-all cursor-default"
            >
              <span>{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
