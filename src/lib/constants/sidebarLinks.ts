import { LayoutDashboard, History, ChartNoAxesColumn } from "lucide-react";
import ILinks from "@/types/links";

const sidebarLinks: ILinks[] = [
  {
    label: "dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "history",
    href: "/dashboard/history",
    icon: History,
  },
  {
    label: "performance",
    href: "/dashboard/performance",
    icon: ChartNoAxesColumn,
  },
];

export default sidebarLinks;
