"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { FolderOpen, Home, Settings, LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { signOutUser } from "@/app/actions";

const navigationItems = [
  {
    title: "Overview",
    href: "/",
    icon: Home,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

type AppSidebarProps = {
  user: User | null;
};

export function AppSidebar({ user }: AppSidebarProps) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible="offcanvas" variant="sidebar">
      <SidebarHeader className="gap-1.5 border-b border-sidebar-border/70 px-4 py-4">
        <p className="text-sm font-semibold tracking-tight text-sidebar-foreground">
          Developer Dashboard
        </p>
        <p className="text-xs leading-none text-sidebar-foreground/70">
          ITDEV-164 Course Project
        </p>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup className="px-3 py-3">
          <SidebarGroupLabel className="px-2 text-[11px] uppercase tracking-[0.16em] text-sidebar-foreground/55">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-1 gap-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isRouteActive(pathname, item.href)}
                    className={
                      isRouteActive(pathname, item.href)
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                        : "text-sidebar-foreground/80"
                    }
                    tooltip={item.title}
                    onClick={() => {
                      if (isMobile) {
                        setOpenMobile(false);
                      }
                    }}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="gap-1.5 border-t border-sidebar-border/70 px-4 py-4">
        <p className="text-xs font-medium text-sidebar-foreground">Mabu Rahman Habibullah</p>
        <p className="text-xs text-sidebar-foreground/70">Web Development Student</p>

        {user ? (
          <form action={signOutUser} className="mt-2">
            <Button
              type="submit"
              variant="outline"
              className="h-9 w-full justify-start border-sidebar-border/70 bg-sidebar-accent/20 text-sidebar-foreground hover:bg-sidebar-accent/40"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </Button>
          </form>
        ) : null}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
