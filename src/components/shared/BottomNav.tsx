"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Milestone, Briefcase, Heart, Users, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/journey", label: "Journey", icon: Milestone },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/hobbies", label: "Hobbies", icon: Heart },
  { href: "/collaborators", label: "Collaborators", icon: Users },
  { href: "/studio", label: "Studio", icon: Sparkles },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
      <div className="grid grid-cols-6 gap-2 rounded-full border bg-background/95 p-2 shadow-lg backdrop-blur-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex flex-col items-center justify-center rounded-full p-2 text-xs font-medium transition-colors h-12 w-12",
              pathname === link.href
                ? "bg-accent text-accent-foreground"
                : "text-foreground/60 hover:bg-accent/50 hover:text-accent-foreground"
            )}
          >
            <link.icon className="h-5 w-5" />
            <span className="sr-only">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
