import * as React from "react";
import {
  AudioWaveform,
  Command,
  
  GalleryVerticalEnd,
  
} from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { FaTasks, FaUser } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";


// This is sample data.
const data = {
  user: {
    name: "shadCn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "Acme Inc",
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
  DashboardOverview: [
    {
      name: "My tasks",
      url: "#",
      icon: FaTasks,
    },
    {
      name: "Projects",
      url: "#",
      icon: GoProjectRoadmap,
    },
    {
      name: "Calender",
      url: "#",
      icon: SlCalender,
    },
    {
      name: "Profile",
      url: "#",
      icon: FaUser,
    },
    {
      name: "Settings",
      url: "#",
      icon: IoMdSettings,
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
        <NavProjects projects={data.DashboardOverview} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
