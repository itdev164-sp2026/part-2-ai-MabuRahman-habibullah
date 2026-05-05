"use server"

import { projectSchema, type Project } from "@/lib/schemas"
import { supabase } from "@/lib/supabase"

export async function createProject(data: Project) {
  const result = projectSchema.safeParse(data)

  if (!result.success) {
    return { error: result.error.errors.map((e) => e.message).join(", ") }
  }

  const parsed = result.data

  try {
    const { data: inserted, error } = await supabase
      .from("projects")
      .insert([{ title: parsed.title, description: parsed.description, status: parsed.status }])
      .select()

    if (error) {
      return { error: error.message }
    }

    return { success: true, project: inserted?.[0] }
  } catch (err: any) {
    return { error: err?.message ?? String(err) }
  }
}

export type CreateProjectResult = Awaited<ReturnType<typeof createProject>>
