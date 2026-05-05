"use client";

import type { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";

import { DashboardLayout } from "@/components/dashboard-layout";
import { SidebarProvider } from "@/components/ui/sidebar";

type AppShellProps = {
  children: React.ReactNode;
  user: User | null;
};

export function AppShell({ children, user }: AppShellProps) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname.startsWith("/login/");

  if (isAuthRoute) {
    return children;
  }

  return (
    <SidebarProvider>
      <DashboardLayout user={user}>{children}</DashboardLayout>
    </SidebarProvider>
  );
}