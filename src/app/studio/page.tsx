
'use client';

import { StudioHero } from "@/components/studio/StudioHero";
import { Container } from "@/components/shared/Container";
import { StudioGallery } from "@/components/studio/StudioGallery";
import { studioInfo } from "@/lib/data/studio/studio";
import { useEffect, useState } from "react";
import type { HeroImage } from "@/lib/types";


export default function StudioPage() {
  const [heroBg, setHeroBg] = useState<HeroImage | null>(null);

  useEffect(() => {
    if (studioInfo.heroImages && studioInfo.heroImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * studioInfo.heroImages.length);
      setHeroBg(studioInfo.heroImages[randomIndex]);
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
