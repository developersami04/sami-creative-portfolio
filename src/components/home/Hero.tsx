import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { aboutData } from "@/lib/data/home/about";
import { Container } from "../shared/Container";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const profileImage = PlaceHolderImages.find((img) => img.id === "profile-picture");

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left">
            <p className="text-lg font-medium uppercase tracking-widest text-accent">
              {aboutData.title}
            </p>
            <h1 className="mt-4 text-5xl font-black md:text-6xl lg:text-7xl">
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
            <div className="absolute inset-0 -rotate-6 transform rounded-2xl bg-secondary transition-transform duration-300 hover:rotate-0"></div>
            <div className="absolute inset-0 rotate-6 transform rounded-2xl bg-accent/30 transition-transform duration-300 hover:rotate-0"></div>
            {profileImage && (
              <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-background shadow-2xl">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  data-ai-hint={profileImage.imageHint}
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
