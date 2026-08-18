"use client";
import Link from 'next/link'
import navLinks from '@/lib/constants/navbarLinks'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation';
import ILinks from '@/types/links';
function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <div>
      <ul className={cn("flex gap-2", className)}>
        {navLinks.map((link: ILinks) => (
          <li key={link.label} className={cn("hover:ps-2 hover:text-primary smooth md:hover:ps-0", { "text-primary": isActive(link.href) })}>
            <Link href={link.href} className="">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavLinks
