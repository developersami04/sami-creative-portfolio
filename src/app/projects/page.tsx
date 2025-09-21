
'use client';

import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { projectsPageData } from "@/lib/data/projects/work";
import { ProjectList } from "@/components/projects/ProjectList";
import { heroBackgrounds } from "@/lib/data/heros/hero-backgrounds";
import placeholderImages from "@/lib/placeholder-images.json";
import { useEffect, useState } from "react";
import type { HeroImage } from "@/lib/types";

export default function ProjectsPage() {
  const [heroBg, setHeroBg] = useState<HeroImage | null>(null);

  useEffect(() => {
    if (heroBackgrounds.projects && heroBackgrounds.projects.length > 0) {
      const randomIndex = Math.floor(Math.random() * heroBackgrounds.projects.length);
      const imageKey = heroBackgrounds.projects[randomIndex];
      const imageData = placeholderImages[imageKey as keyof typeof placeholderImages];
      if (imageData) {
        setHeroBg({
          imageUrl: imageData.url,
          imageHint: imageData.hint
        });
      }
    }
  }, []);

  return (
    <>
      <div className="relative h-[40vh] min-h-[300px] w-full">
        {heroBg && (
          <Image
            src={heroBg.imageUrl}
            alt={projectsPageData.title}
            data-ai-hint={heroBg.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="animated-aurora" />
        <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-primary-foreground md:text-6xl">{projectsPageData.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {projectsPageData.description}
          </p>
        </Container>
      </div>
      <Container>
        <ProjectList />
      </Container>
    </>
  );
};
