"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  User,
  Palette,
  Newspaper,
  BookOpen,
  Calendar,
  ScrollText,
  Heart,
  Briefcase,
  Milestone,
  ChevronLeft,
  ChevronRight,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const desktopNavLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/journey", label: "Journey", icon: Milestone },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/hobbies", label: "Hobbies", icon: Heart },
    { href: "/collaborators", label: "Collaborators", icon: Users },
    { href: "/studio", label: "Studio", icon: Sparkles },
    { href: "/#profiles", label: "Profiles", icon: User },
];

const mobileNavLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/journey", label: "Journey", icon: Milestone },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/hobbies", label: "Hobbies", icon: Heart },
    { href: "/collaborators", label: "Collaborators", icon: Users },
    { href: "/studio", label: "Studio", icon: Sparkles },
    { href: "/#profiles", label: "Profiles", icon: User },
];

export function BottomNav() {
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render on the server
  }
  
  const navLinks = desktopNavLinks;

  return (
    <TooltipProvider>
      <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full border bg-background/95 p-2 shadow-lg backdrop-blur-sm">
            {navLinks.map((link) => (
              <Tooltip key={link.href}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "h-12 w-12 rounded-full",
                      (pathname === link.href || pathname + '#' + (link.href.split('#')[1] || '')) === link.href) && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Link href={link.href}>
                      <link.icon
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          (pathname === link.href || pathname + '#' + (link.href.split('#')[1] || '')) === link.href) && "scale-125"
                        )}
                      />
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
      </nav>
    </TooltipProvider>
  );
}
