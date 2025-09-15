"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { CodeXml } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Journey" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/studio", label: "Studio" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary">
          <CodeXml className="h-7 w-7 text-accent" />
          <span className="text-xl font-headline font-bold">PortfolioFlow</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : "text-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
