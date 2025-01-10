"use client";

import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { Route } from "next";

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/shadcn/sidebar";

interface NavHomeProps<T extends string> {
  home: {
    name: string;
    url: Route<T> | URL;
    icon: LucideIcon;
  }[];
}

export function NavHome<T extends string>({ home }: NavHomeProps<T>) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {home.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
} 