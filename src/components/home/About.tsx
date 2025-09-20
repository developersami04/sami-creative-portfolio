import { aboutData } from "@/lib/data/home/about";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Send } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {aboutData.sectionTitle}
        </h2>
        <div className="mt-6 space-y-6 text-lg leading-8 text-foreground/80">
            {aboutData.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
            ))}
        </div>
        <div className="mt-10">
            <Button asChild size="lg">
                <Link href="mailto:your-email@example.com">
                    Hire Me
                    <Send className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
