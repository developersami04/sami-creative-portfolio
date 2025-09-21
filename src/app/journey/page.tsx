
'use client';

import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { journeyPageData } from "@/lib/data/journey/journey";
import { heroBackgrounds } from "@/lib/data/hero/hero";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { useEffect, useState } from "react";
import type { HeroImage } from "@/lib/types";

export default function JourneyPage() {
  const [heroBg, setHeroBg] = useState<HeroImage | null>(null);

  useEffect(() => {
    if (heroBackgrounds.journey && heroBackgrounds.journey.length > 0) {
      const randomIndex = Math.floor(Math.random() * heroBackgrounds.journey.length);
      setHeroBg(heroBackgrounds.journey[randomIndex]);
    }
  }, []);

  return (
    <>
      <div className="relative h-[40vh] min-h-[300px] w-full">
        {heroBg && (
          <Image
            src={heroBg.imageUrl}
            alt={journeyPageData.title}
            data-ai-hint={heroBg.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="animated-aurora" />
        <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-primary-foreground md:text-6xl">{journeyPageData.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {journeyPageData.description}
          </p>
        </Container>
      </div>
      <Container className="py-16 md:py-24">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {journeyPageData.timeline.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
                {journeyPageData.timeline.description}
            </p>
        </div>
        <JourneyTimeline />
      </Container>
    </>
  );
};
