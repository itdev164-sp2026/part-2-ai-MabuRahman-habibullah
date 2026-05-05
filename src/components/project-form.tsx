"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { projectSchema, type Project } from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

import { createProject } from "@/app/actions"

export function ProjectForm() {
  const router = useRouter()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: { title: "", description: "", status: "active" },
  })

  async function onSubmit(values: Project) {
    try {
      const res = await createProject(values)

      if (res?.error) {
        toast.error(res.error)
        return
      }

      toast.success("Project created")
      router.push("/projects")
    } catch (err) {
      console.error(err)
      toast.error("Unable to create project")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Field>
        <FieldLabel>Title</FieldLabel>
        <FieldContent>
          <Input placeholder="Project title" {...register("title")} aria-invalid={!!errors.title} />
          <FieldError errors={errors.title ? [{ message: errors.title.message }] : []} />
        </FieldContent>
      </Field>

      <Field>
        <FieldLabel>Description</FieldLabel>
        <FieldContent>
          <Textarea placeholder="Project description" {...register("description")} aria-invalid={!!errors.description} />
          <FieldError errors={errors.description ? [{ message: errors.description.message }] : []} />
        </FieldContent>
      </Field>

      <Field>
        <FieldLabel>Status</FieldLabel>
        <FieldContent>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={errors.status ? [{ message: errors.status.message }] : []} />
        </FieldContent>
      </Field>

      <div>
        <Button type="submit" disabled={isSubmitting}>
          Create Project
        </Button>
      </div>
    </form>
  )
}

export default ProjectForm
