type Education = {
  date: string;
  degree: string;
  institution: string;
  description: string;
};

const education: Education[] = [
  {
    date: "2024 - Present",
    degree: "Bachelor of Software Engineering (S.Kom)",
    institution: "Universitas Teknologi Bandung",
    description:
      "Focused on software engineering, web development, and database systems. Completed projects in full-stack development and mobile applications.",
  },
  {
    date: "2021 - 2024",
    degree: "Vocational High School Diploma",
    institution: "SMK Negeri 13 Kota Bandung",
    description:
      "Member of the programming club and participated in various coding competitions.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-16 ">
      {/* Section Header */}
      <div className="mb-12">
        <p className="section-label">// Education</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
          My academic background
        </h2>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl">
        {education.map((edu, index) => (
          <div
            key={index}
            className={cn(
              "grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 pb-8 mb-8",
              index !== education.length - 1 && "border-b border-border"
            )}
          >
            {/* Date */}
            <span className="font-mono text-sm text-foreground-muted">
              {edu.date}
            </span>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
              <p className="text-accent-primary font-medium mb-3">
                {edu.institution}
              </p>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                {edu.description}
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