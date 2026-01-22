import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "../components/ui/sidebar";

import { LayoutDashboardIcon, Users2Icon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-gray-300 dark:border-gray-600"
    >
      <SidebarHeader className="flex px-2 group-data-[state=expanded]:justify-end">
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavLink to="/dashboard" end>
              {({ isActive }) => (
                <SidebarMenuButton 
                  isActive={isActive} 
                  tooltip="Dashboard" 
                  className="cursor-pointer"
                >
                  <div className={`flex items-center justify-center rounded-md p-1.5 ${isActive ? 'bg-red-700 text-white' : ''}`}>
                    <LayoutDashboardIcon className="h-4 w-4" />
                  </div>
                  <span>Dashboard</span>
                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <NavLink to="/patients">
              {({ isActive }) => (
                <SidebarMenuButton 
                  isActive={isActive} 
                  tooltip="Patients" 
                  className="cursor-pointer"
                >
                  <div className={`flex items-center justify-center rounded-md p-1.5 ${isActive ? 'bg-red-700 text-white' : ''}`}>
                    <Users2Icon className="h-4 w-4" />
                  </div>
                  <span>Patients</span>
                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}