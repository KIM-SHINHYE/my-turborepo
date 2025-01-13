"use client";

import * as React from "react";
import { AudioWaveform, BookOpen, Command, GalleryVerticalEnd, Home } from "lucide-react";

import { NavHome } from "@/components/ui/app-sidebar/nav-home";
import { NavMain } from "@/components/ui/app-sidebar/nav-main";
import { NavUser } from "@/components/ui/app-sidebar/nav-user";
import { TeamSwitcher } from "@/components/ui/app-sidebar/team-switcher";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/shadcn/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Motion",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navHome: [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
  ],
  navMain: [
    {
      title: "Animations",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Transitions",
          url: "/animation/transitions",
        },
        {
          title: "Gestures",
          url: "/animation/gestures",
        },
        {
          title: "Scroll",
          url: "/animation/scroll",
        },
        {
          title: "Layout",
          url: "/animation/layout",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavHome home={data.navHome} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
