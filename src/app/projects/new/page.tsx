import { ProjectForm } from "@/components/project-form"

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">New Project</h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          Create a new project and save it to Supabase.
        </p>
      </section>

      <section className="max-w-2xl">
        <ProjectForm />
      </section>
    </div>
  )
}
