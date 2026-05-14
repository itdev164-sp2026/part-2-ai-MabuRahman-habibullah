import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createSupabaseServerClient } from "@/lib/supabase";
import { cn } from "@/lib/utils";

type ProjectStatus = "active" | "completed" | "archived";

interface Project {
  id: string | number;
  title: string;
  description: string | null;
  status: ProjectStatus;
}

const statusBadgeStyles: Record<ProjectStatus, string> = {
  active: "border-green-500/15 bg-green-500/10 text-green-700 dark:bg-green-500/15 dark:text-green-300",
  completed: "border-blue-500/15 bg-blue-500/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  archived: "border-slate-500/15 bg-slate-500/10 text-slate-700 dark:bg-slate-500/15 dark:text-slate-300",
};

function statusLabel(status: ProjectStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function getProjectsErrorDescription(message: string) {
  if (message.includes("Could not find the table 'public.projects'")) {
    return "The public.projects table does not exist in your Supabase project yet. Run the SQL in supabase-projects-setup.sql in the Supabase SQL Editor, then refresh this page.";
  }

  return message;
}

export default async function ProjectsPage() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("projects")
    .select("id, title, description, status");

  const projects = (data ?? []) as Project[];

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="space-y-2 px-1">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              A live view of your project records from Supabase.
            </p>
          </div>

          <div>
            <Button asChild>
              <Link href="/projects/new">New Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {error ? (
        <Card className="border-destructive/40 bg-destructive/5 shadow-sm">
          <CardHeader className="space-y-2 p-6">
            <CardTitle className="text-lg font-semibold">Unable to load projects</CardTitle>
            <CardDescription className="text-muted-foreground">
              {getProjectsErrorDescription(error.message)}
            </CardDescription>
          </CardHeader>
        </Card>
      ) : projects.length === 0 ? (
        <Card className="border-border/70 bg-muted/30 shadow-sm">
          <CardHeader className="space-y-2 p-6">
            <CardTitle className="text-lg font-semibold">No projects found</CardTitle>
            <CardDescription className="text-muted-foreground">
              Add rows to your projects table and they will appear here.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/70 bg-card/95 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardHeader className="space-y-2 p-6">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="line-clamp-2 text-lg font-semibold leading-snug">
                    {project.title}
                  </CardTitle>
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center rounded-full border px-2 py-1 text-xs font-medium tracking-wide",
                      statusBadgeStyles[project.status] ?? statusBadgeStyles.archived
                    )}
                  >
                    {statusLabel(project.status)}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description?.trim() || "No description provided."}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
    </div>
  );
}