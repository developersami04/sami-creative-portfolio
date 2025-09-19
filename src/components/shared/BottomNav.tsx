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
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 p-2 backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-6 gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex flex-col items-center justify-center rounded-md p-2 text-xs font-medium transition-colors",
              pathname === link.href
                ? "bg-accent text-accent-foreground"
                : "text-foreground/60 hover:bg-accent/50 hover:text-accent-foreground"
            )}
          >
            <link.icon className="h-5 w-5" />
            <span className="mt-1">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
