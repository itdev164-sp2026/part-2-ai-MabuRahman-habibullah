"use client";

import { useActionState, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { authenticateUser, type AuthFormState } from "@/app/(auth)/login/actions";

const initialState: AuthFormState = {
  error: null,
  message: null,
};

type AuthMode = "signin" | "signup";

export function AuthForm() {
  const [mode, setMode] = useState<AuthMode>("signin");
  const [state, formAction, isPending] = useActionState(authenticateUser, initialState);

  return (
    <Card className="overflow-hidden border-border/70 bg-card/95 shadow-xl shadow-foreground/5">
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500" />
      <CardHeader className="space-y-3 p-6 sm:p-8">
        <CardTitle className="text-2xl tracking-tight">{mode === "signin" ? "Sign In" : "Create Account"}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {mode === "signin"
            ? "Use your Supabase email and password to access your projects dashboard."
            : "Create a new account to begin using the protected project workspace."}
        </CardDescription>

        <div className="grid grid-cols-2 rounded-lg bg-muted p-1">
          <Button
            type="button"
            variant={mode === "signin" ? "default" : "ghost"}
            className="h-9"
            onClick={() => setMode("signin")}
          >
            Sign In
          </Button>
          <Button
            type="button"
            variant={mode === "signup" ? "default" : "ghost"}
            className="h-9"
            onClick={() => setMode("signup")}
          >
            Sign Up
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="mode" value={mode} />

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="••••••••" required minLength={6} />
          </div>

          {state.error ? (
            <p className="text-sm text-destructive" role="alert">
              {state.error}
            </p>
          ) : null}

          {state.message ? (
            <p className="text-sm text-emerald-600 dark:text-emerald-400" role="status">
              {state.message}
            </p>
          ) : null}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (mode === "signin" ? "Signing In..." : "Creating Account...") : mode === "signin" ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}