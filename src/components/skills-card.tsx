import { LucideIcon } from "lucide-react";

interface SkillsCardProps {
  name: string;
  icon: LucideIcon;
}

export function SkillsCard({ name, icon: Icon }: SkillsCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15 sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex min-h-28 flex-col items-center justify-center space-y-3 sm:min-h-32">
        <div className="rounded-full bg-muted p-3 transition-colors duration-300 group-hover:bg-primary/10">
          <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
        </div>
        <h3 className="text-center text-sm font-semibold sm:text-base">{name}</h3>
      </div>
    </div>
  );
}
