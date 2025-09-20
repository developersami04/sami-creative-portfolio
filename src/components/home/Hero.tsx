"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/lib/data/home/about";
import { Container } from "../shared/Container";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import type { HeroImage } from "@/lib/types";

export function Hero() {
  const [heroBg, setHeroBg] = useState<HeroImage | null>(null);
  const [profilePic, setProfilePic] = useState<HeroImage | null>(null);

  useEffect(() => {
    if (aboutData.heroBackgrounds && aboutData.heroBackgrounds.length > 0) {
      const randomIndex = Math.floor(Math.random() * aboutData.heroBackgrounds.length);
      setHeroBg(aboutData.heroBackgrounds[randomIndex]);
    }
    if (aboutData.profilePictures && aboutData.profilePictures.length > 0) {
      const randomIndex = Math.floor(Math.random() * aboutData.profilePictures.length);
      setProfilePic(aboutData.profilePictures[randomIndex]);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
       {heroBg && (
        <>
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.imageHint}
            data-ai-hint={heroBg.imageHint}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="animated-aurora absolute inset-0" />
        </>
      )}
      <Container className="relative z-10 py-20 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left">
            <p className="text-lg font-medium uppercase tracking-widest text-accent">
              {aboutData.title}
            </p>
            <h1 className="glow-name mt-4 font-black">
              {aboutData.name}
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              {aboutData.bio}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#about">
                  More About Me
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 -rotate-3 transform rounded-2xl bg-secondary/50 shadow-2xl shadow-accent/20 transition-transform duration-3000 hover:rotate-0 animate-spin-slow"></div>
            <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-accent/30 shadow-2xl shadow-primary/20 transition-transform duration-3000 hover:rotate-0 animate-spin-slower"></div>
            {profilePic && (
              <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-background shadow-2xl">
                <Image
                  src={profilePic.imageUrl}
                  alt={aboutData.name}
                  data-ai-hint={profilePic.imageHint}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
