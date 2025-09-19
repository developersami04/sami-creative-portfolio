"use client"

import * as React from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const themes = ["light", "dark", "colorful"];

  const handleToggle = () => {
    const currentIndex = themes.indexOf(theme === 'system' ? 'light' : theme || 'light');
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleToggle}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
       {/* The Palette icon will not be directly visible in the button, but you can add it to the dropdown or cycle through it */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
