import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { aboutData } from "@/lib/data/about";
import { Container } from "../shared/Container";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  const profileImage = PlaceHolderImages.find((img) => img.id === "profile-picture");
  const heroBgImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full text-white">
      {heroBgImage && (
        <Image
          src={heroBgImage.imageUrl}
          alt={heroBgImage.description}
          data-ai-hint={heroBgImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <Container className="relative z-10 grid h-full grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-xl font-medium uppercase tracking-widest text-accent">
            {aboutData.title}
          </p>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">
            {aboutData.name}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            {aboutData.paragraphs[0]}
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="#profiles">Contact Me</Link>
            </Button>
          </div>
        </div>

        <div className="relative hidden h-[60vh] w-full md:flex justify-center items-center">
            {profileImage && (
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <Image
                        src={profileImage.imageUrl}
                        alt={profileImage.description}
                        data-ai-hint={profileImage.imageHint}
                        fill
                        className="rounded-full object-cover border-4 border-accent shadow-2xl"
                    />
                </div>
            )}
        </div>
      </Container>
    </section>
  );
}
