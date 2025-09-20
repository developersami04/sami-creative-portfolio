import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { studioInfo } from "@/lib/data/studio/studio";

export function StudioHero() {
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
          {studioInfo.heroImageUrl && (
            <Image
              src={studioInfo.heroImageUrl}
              alt={studioInfo.title}
              data-ai-hint={studioInfo.heroImageHint}
              fill
              className="rounded-lg object-cover"
            />
          )}
        </div>
      </Container>
    </div>
  );
}
