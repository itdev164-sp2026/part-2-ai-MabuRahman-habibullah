import {
  Code,
  Database,
  Palette,
  Zap,
  GitBranch,
  Smartphone,
} from "lucide-react";
import { SkillsCard } from "@/components/skills-card";

export default function HomePage() {
  const skills = [
    { name: "React", icon: Code },
    { name: "TypeScript", icon: Zap },
    { name: "Next.js", icon: Database },
    { name: "Tailwind CSS", icon: Palette },
    { name: "JavaScript", icon: GitBranch },
    { name: "Web Development", icon: Smartphone },
  ];

  return (
    <div className="space-y-12 sm:space-y-14">
      {/* Profile Section */}
      <section className="space-y-5 px-1 text-center sm:space-y-6">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mabu Rahman Habibullah
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Web Development Student
          </p>
        </div>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          I'm a passionate web development student specializing in building modern,
          full-stack applications with Next.js and React. I'm committed to mastering
          AI-native development practices and creating scalable, user-centric web solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="space-y-5 rounded-2xl border border-border/60 bg-muted/30 p-4 sm:space-y-6 sm:p-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Skills & Technologies
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Technologies and frameworks I work with
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillsCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
