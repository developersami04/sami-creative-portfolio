
'use client';

import { StudioHero } from "@/components/studio/StudioHero";
import { Container } from "@/components/shared/Container";
import { StudioGallery } from "@/components/studio/StudioGallery";
import { studioInfo } from "@/lib/data/studio/studio";
import { heroBackgrounds } from "@/lib/data/hero/hero";
import { useEffect, useState } from "react";
import type { HeroImage } from "@/lib/types";


export default function StudioPage() {
  const [heroBg, setHeroBg] = useState<HeroImage | null>(null);

  useEffect(() => {
    if (heroBackgrounds.studio && heroBackgrounds.studio.length > 0) {
      const randomIndex = Math.floor(Math.random() * heroBackgrounds.studio.length);
      setHeroBg(heroBackgrounds.studio[randomIndex]);
    }
  }, []);

  return (
    <>
      <StudioHero heroBg={heroBg} />
      <Container className="py-16 md:py-24">
        <StudioGallery />
      </Container>
    </>
  );
};
