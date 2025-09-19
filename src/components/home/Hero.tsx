import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/Container";
import { Github, Linkedin, Twitter } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { profilesData } from "@/lib/data";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "profile-picture");
  const github = profilesData.find(p => p.icon === 'github');
  const linkedin = profilesData.find(p => p.icon === 'linkedin');
  const twitter = profilesData.find(p => p.icon === 'twitter');

  return (
    <section className="relative flex h-auto min-h-[500px] items-center bg-background py-20 text-center md:h-[80vh] md:py-0 overflow-hidden">
      <div className="absolute inset-0 z-0 animated-aurora" />
      <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex flex-col items-center md:items-start md:order-1">
          <h1 className="text-5xl font-black tracking-tighter text-primary md:text-left md:text-7xl lg:text-8xl">
            Developer<br /> Sami
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:mx-0 md:text-xl">
            I build beautiful, functional, and user-centric digital experiences. Explore my work and journey.
          </p>
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-2">
            {github && (
              <Button asChild size="icon" variant="ghost" className="h-12 w-12 text-foreground/70 hover:text-accent">
                <Link href={github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
            )}
            {linkedin && (
              <Button asChild size="icon" variant="ghost" className="h-12 w-12 text-foreground/70 hover:text-accent">
                <Link href={linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
            )}
            {twitter && (
              <Button asChild size="icon" variant="ghost" className="h-12 w-12 text-foreground/70 hover:text-accent">
                <Link href={twitter.url} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="relative flex aspect-square h-64 justify-self-center md:order-2 md:h-96 lg:h-[28rem]">
          {heroImage && (
              <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  fill
                  className="rounded-full object-cover shadow-2xl"
                  priority
              />
          )}
        </div>
      </Container>
    </section>
  );
}
