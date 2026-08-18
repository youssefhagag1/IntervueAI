"use client";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import sidebarLinks from "@/lib/constants/sidebarLinks";
import { usePathname } from "next/navigation";

const actualBar = (path: string) => (
  <div className="w-64 sticky top-17.5 h-[calc(100vh-70px)] py-3 border-r border-gray-200 hidden md:flex flex-col">
    <Link
      href="/interview"
      className="flex bg-primary rounded-sm p-3 m-2 outline-2 outline-offset-2 outline-dashed mb-5 text-white items-center gap-3 hover:bg-primary/90"
    >
      <PlusCircle size={20} />
      <span>Start New Interview</span>
    </Link>

    <div className="flex flex-col">
      {sidebarLinks.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            href={link.href}
            className={`flex items-center gap-3 p-4 ${path === link.href ? "bg-primary-container text-primary border-s-3 border-primary" : "hover:bg-gray-100"} `}
            key={link.label}
          >
            {Icon && <Icon size={20} />}
            <span className="capitalize">{link.label}</span>
          </Link>
        );
      })}
    </div>
  </div>
);
const MobileSidebar = (path: string) => (
  <div className="w-15 sticky top-17.5 h-[calc(100vh-70px)] py-3 border-r border-gray-200 md:hidden flex flex-col">
    <Link
      href="/interview"
      className="flex bg-primary rounded-sm p-3 m-2 outline-2 outline-offset-2 outline-dashed mb-5 text-white items-center gap-3 hover:bg-primary/90"
    >
      <PlusCircle size={20} />
    </Link>

    <div className="flex flex-col">
      {sidebarLinks.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            href={link.href}
            className={`flex items-center gap-3 p-4 ${path === link.href ? "bg-primary-container text-primary border-s-3 border-primary" : "hover:bg-gray-100"} `}
            key={link.label}
          >
            {Icon && <Icon size={20} />}
          </Link>
        );
      })}
    </div>
  </div>
);

function Sidebar() {
  const path = usePathname();
  return (
    <>
      {actualBar(path)}
      {MobileSidebar(path)}
    </>
  );
}

export default Sidebar;
