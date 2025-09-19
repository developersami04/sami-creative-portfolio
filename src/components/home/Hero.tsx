import Image from "next/image";
import { Container } from "../shared/Container";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { aboutData } from "@/lib/data";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");
  const profileImage = PlaceHolderImages.find((img) => img.id === "profile-picture-hero");

  return (
    <section className="relative bg-background overflow-hidden">
      <Container className="relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="font-semibold text-primary uppercase tracking-wider">
              {aboutData.title}
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-headline font-black text-foreground">
              {aboutData.name}
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-lg mx-auto md:mx-0">
              {aboutData.paragraphs[0]}
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:hello@example.com">
                  <Mail className="mr-2" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            {profileImage && (
              <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                 <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  data-ai-hint={profileImage.imageHint}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
          </div>
        </div>
      </Container>
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
        />
      )}
      <div className="absolute inset-0 z-0 animated-aurora"></div>
    </section>
  );
}
