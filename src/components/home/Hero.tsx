import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/Container";
import { ArrowDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "profile-picture");
  return (
    <section className="relative flex h-[80vh] min-h-[500px] items-center justify-center bg-background text-center md:text-left overflow-hidden">
      <div className="absolute inset-0 z-0 animated-aurora" />
      <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-primary md:text-7xl lg:text-8xl">
            Creative Developer &<br /> Digital Artisan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:mx-0 md:text-xl">
            I build beautiful, functional, and user-centric digital experiences. Explore my work and journey.
          </p>
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#work">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/journey">
                My Journey
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative hidden aspect-square h-80 justify-self-center md:h-96 md:flex lg:h-[28rem]">
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
