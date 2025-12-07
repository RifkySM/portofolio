type Experience = {
  date: string;
  title: string;
  company: string;
  description: string;
};

const experiences: Experience[] = [
  {
    date: "Oct 2025 - Present",
    title: "Staff IT - Developer",
    company: "PT Anyar Retail Indonesia",
    description:
      "Developing and maintaining web applications using React and Laravel. Working with the team to implement new features and fix bugs.",
  },
  {
    date: "April 2024 - July 2025",
    title: "Full-Stack Developer",
    company: "PT BARA Teknovasi",
    description:
      "Developed and maintained client projects using modern web technologies. Collaborated with team members to deliver quality solutions.",
  },
  {
    date: "March 2024 - April 2025",
    title: "Outsourced Full-Stack Developer",
    company: "PT Nxsys Professional",
    description:
        "Designed, developed, and maintained school management applications including LMS, administration, finance, and HR modules. Collaborated with teachers to build solutions that meet educational needs.",
  },
  {
    date: "Oct 2023 - March 2024",
    title: "Intern Junior Developer",
    company: "PT BARA Teknovasi",
    description:
      "Built responsive web interfaces and integrated third-party APIs. Collaborated with design team to implement pixel-perfect UI.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-16">
      {/* Section Header */}
      <div className="mb-12">
        <p className="section-label">// Experience</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
          Where I've worked
        </h2>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={cn(
              "grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 pb-8 mb-8",
              index !== experiences.length - 1 && "border-b border-border"
            )}
          >
            {/* Date */}
            <span className="font-mono text-sm text-foreground-muted">
              {exp.date}
            </span>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
              <p className="text-accent-primary font-medium mb-3">
                {exp.company}
              </p>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
