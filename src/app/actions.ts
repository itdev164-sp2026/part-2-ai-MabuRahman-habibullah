"use server"

import { projectSchema, type Project } from "@/lib/schemas"
import { redirect } from "next/navigation"

import { createSupabaseServerActionClient } from "@/lib/supabase"

export async function signOutUser() {
  const supabase = await createSupabaseServerActionClient()

  await supabase.auth.signOut()
  redirect("/login")
}

export async function createProject(data: Project) {
  const result = projectSchema.safeParse(data)

  if (!result.success) {
    return { error: result.error.issues.map((issue) => issue.message).join(", ") }
  }

  const parsed = result.data
  const supabase = await createSupabaseServerActionClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "You must be signed in to create a project." }
  }

  try {
    const { data: inserted, error } = await supabase
      .from("projects")
      .insert([
        {
          title: parsed.title,
          description: parsed.description,
          status: parsed.status,
          user_id: user.id,
        },
      ])
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
