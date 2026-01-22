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
          {/* Dashboard */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Dashboard">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-800 dark:bg-gray-900"
                    : ""
                }
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Orders */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Patients">
              <NavLink
                to="/patients"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 dark:bg-gray-700"
                    : ""
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