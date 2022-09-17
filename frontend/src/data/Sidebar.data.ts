import { SidebarTypes } from "types";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

namespace SidebarData {
  export const links: SidebarTypes.Link[] = [
    { name: "Dashboard", to: "/app/dashboard", icon: HomeIcon },
    { name: "Team", to: "/app/team", icon: UsersIcon },
    { name: "Projects", to: "/app/projects", icon: FolderIcon },
    { name: "Calendar", to: "/app/calendar", icon: CalendarIcon },
    { name: "Documents", to: "/app/documents", icon: InboxIcon },
    { name: "Reports", to: "/app/reports", icon: ChartBarIcon },
  ];

  export const items: SidebarTypes.Item[] = [
    { name: "Your Profile", to: "/" },
    { name: "Settings", to: "/" },
    { name: "Sign out", to: "/" },
  ];
}

export default SidebarData;
