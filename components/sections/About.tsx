import { MapPin, Globe, BookOpen, Briefcase } from "lucide-react";
import Image from "next/image";

const AVAILABLE_FOR_WORK = false;
const currentYear = new Date().getFullYear();
const yearsExperience = currentYear - 2023;

const stats = [
  { number: yearsExperience + "+", label: "Years Experience" },
  { number: "10+", label: "Projects Shipped" },
  { number: "15+", label: "Happy Clients" },
  { number: "99%", label: "Code Coverage" },
];


export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 bg-background-secondary">
      {/* Section Header */}
      <div className="mb-12">
        <p className="section-label">// About</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
          Get to know me
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Main Intro Card */}
        <div className="card p-7 lg:col-span-8 flex flex-col justify-center">
          <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-snug">
            I'm a passionate developer who loves turning ideas into reality.
          </h3>
          <p className="text-foreground-secondary leading-relaxed">
            With a strong foundation in both frontend and backend technologies, I
            specialize in building full-stack applications that are not only
            functional but also scalable and maintainable. I believe in writing
            clean code that speaks for itself and creating user experiences that
            feel intuitive and delightful.
          </p>
        </div>

        {/* Photo Card */}
        <div className="card lg:col-span-4 aspect-square overflow-hidden p-0 bg-gradient-to-br from-background-card-hover to-background-primary">
          <div className="relative w-full h-full">
            <Image
              src="/mypic(1).webp"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <div
            key={index}
            className="card p-6 lg:col-span-3 flex flex-col items-center justify-center text-center"
          >
            <span className="text-4xl font-bold gradient-text mb-1">
              {stat.number}
            </span>
            <span className="text-foreground-secondary text-sm">
              {stat.label}
            </span>
          </div>
        ))}

        {/* Location Card */}
        <div className="card p-6 lg:col-span-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-accent-orange" />
          </div>
          <div>
            <h4 className="font-semibold mb-0.5">Based in Bandung, Indonesia</h4>
            <p className="text-foreground-secondary text-sm">
              Open to remote work worldwide
            </p>
          </div>
        </div>

        {/* Availability Status */}
        <div className="card p-6 lg:col-span-6 flex items-center gap-4">
          <div className={`w-14 h-14 rounded-xl ${AVAILABLE_FOR_WORK ? 'bg-green-500/10' : 'bg-red-500/10'} flex items-center justify-center flex-shrink-0`}>
            <Briefcase className={`w-6 h-6 ${AVAILABLE_FOR_WORK ? 'text-green-500' : 'text-red-500'}`} />
          </div>
          <div>
            <h4 className="font-semibold mb-0.5">
              {AVAILABLE_FOR_WORK ? 'Available for Work' : 'Currently Unavailable'}
            </h4>
            <p className="text-foreground-secondary text-sm">
              {AVAILABLE_FOR_WORK
                ? 'Open to freelance & full-time opportunities'
                : 'Not accepting new projects at this time'}
            </p>
          </div>
        </div>

        {/* Languages Spoken */}
        <div className="card p-6 lg:col-span-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h4 className="font-semibold mb-0.5">Languages</h4>
            <p className="text-foreground-secondary text-sm">
              Indonesian (Native), English (Professional)
            </p>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="card p-6 lg:col-span-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h4 className="font-semibold mb-0.5">Currently Learning</h4>
            <p className="text-foreground-secondary text-sm">
              Advanced Next.js & Cloud Architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
