"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-10 border-b border-foreground/15 bg-background/85 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-heading text-xl font-semibold italic">
            Syllabus
          </span>
          <span className="hidden font-mono text-[0.7rem] tracking-widest text-muted-foreground uppercase sm:inline">
            AWT · Fall 26
          </span>
        </Link>

        <div className="flex gap-1 font-mono text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 transition-colors hover:bg-ember-soft hover:text-ember-deep dark:hover:bg-ember/15 dark:hover:text-ember-soft",
                isActive(link.href) &&
                  "bg-foreground text-background hover:bg-foreground hover:text-background dark:bg-foreground dark:text-background dark:hover:bg-foreground dark:hover:text-background"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
