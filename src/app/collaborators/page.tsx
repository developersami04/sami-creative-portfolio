import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { CollaboratorsList } from "@/components/collaborators/CollaboratorsList";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: "Collaborators | PortfolioFlow",
  description: "People I've had the pleasure to work with.",
};

const CollaboratorsPage = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === "collaborators-hero");

  return (
    <>
      <div className="relative h-[40vh] min-h-[300px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-primary-foreground md:text-6xl">Collaborators</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            I've had the privilege of working with some amazing people.
          </p>
        </Container>
      </div>

      <Container>
        <CollaboratorsList />
      </Container>
    </>
  );
};

export default CollaboratorsPage;
