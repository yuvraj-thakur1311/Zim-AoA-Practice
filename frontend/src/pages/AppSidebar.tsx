import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "../components/ui/sidebar";

import { Home, List } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-gray-600 dark:border-gray-800"
    >
      <SidebarHeader
        className="
          flex px-2
          group-data-[state=expanded]:justify-end
          group-data-[state=collapsed]:justify-start
        "
      >
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Dashboard">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-md px-2 py-2 ${
                    isActive ? "bg-red-600 text-white" : "hover:bg-muted"
                  }`
                }
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Patients">
              <NavLink
                to="/patients"
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-md px-2 py-2 ${
                    isActive ? "bg-red-600 text-white" : "hover:bg-muted"
                  }`
                }
              >
                <List className="h-4 w-4" />
                <span>Patients</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
