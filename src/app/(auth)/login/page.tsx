import { AuthForm } from "@/components/auth-form";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-lg items-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full space-y-6">
        <section className="space-y-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Authentication
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Welcome back</h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Sign in to manage your protected projects or create a new account to get started.
          </p>
        </section>

        <AuthForm />
      </div>
    </div>
  );
}