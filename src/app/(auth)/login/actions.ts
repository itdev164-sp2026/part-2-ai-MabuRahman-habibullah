"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { createSupabaseServerActionClient } from "@/lib/supabase";

const authSchema = z.object({
  mode: z.enum(["signin", "signup"]),
  email: z.string().email({ message: "Enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export type AuthFormState = {
  error: string | null;
  message: string | null;
};

const initialState: AuthFormState = {
  error: null,
  message: null,
};

export async function authenticateUser(
  _previousState: AuthFormState = initialState,
  formData: FormData
): Promise<AuthFormState> {
  const parsed = authSchema.safeParse({
    mode: formData.get("mode"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues.map((issue) => issue.message).join(", "),
      message: null,
    };
  }

  const supabase = await createSupabaseServerActionClient();

  if (parsed.data.mode === "signin") {
    const { error } = await supabase.auth.signInWithPassword({
      email: parsed.data.email,
      password: parsed.data.password,
    });

    if (error) {
      return { error: error.message, message: null };
    }

    redirect("/projects");
  }

  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  if (error) {
    return { error: error.message, message: null };
  }

  if (data.session) {
    redirect("/projects");
  }

  return {
    error: null,
    message: "Account created. Check your email to confirm your sign up, then sign in.",
  };
}