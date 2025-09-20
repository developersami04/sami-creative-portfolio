import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { studioInfo } from "@/lib/data/studio";

export function StudioHero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "studio-hero");
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="relative z-10 grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-32">
        <div className="text-primary-foreground">
          <h1 className="text-4xl font-black md:text-6xl">
            {studioInfo.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {studioInfo.description}
          </p>
        </div>
        <div className="relative aspect-video rounded-lg shadow-2xl">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="rounded-lg object-cover"
            />
          )}
        </div>
      </Container>
    </div>
  );
}
