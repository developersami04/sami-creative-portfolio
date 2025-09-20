
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { CollaboratorsList } from "@/components/collaborators/CollaboratorsList";
import { collaboratorsData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Collaborators | PortfolioFlow",
  description: "People I've had the pleasure to work with.",
};

const CollaboratorImage = ({ id, className }: { id: string; className?: string; }) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) return null;

  return (
    <div
      className={cn(
        "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
        className
      )}
    >
      <Image
        src={image.imageUrl}
        alt={image.description}
        data-ai-hint={image.imageHint}
        fill
        sizes="(min-width: 640px) 18rem, 11rem"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};


const CollaboratorsPage = () => {
  // Ensure we have enough data, repeating if necessary
  const teamImageIds = [
    collaboratorsData[0]?.imageId || 'collaborator-1',
    collaboratorsData[1]?.imageId || 'collaborator-2',
    collaboratorsData[2]?.imageId || 'collaborator-3',
    collaboratorsData[3]?.imageId || 'collaborator-1',
    collaboratorsData[0]?.imageId || 'collaborator-2',
  ];

  return (
    <div className="bg-background text-foreground">
      <div className="overflow-hidden pt-16 sm:pt-24 pb-24 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Meet our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              A diverse team of passionate professionals with unique skills driving innovation and excellence in every project.
            </p>
          </div>
        </Container>
         <div className="mt-16 -mx-4 flex justify-center gap-x-6 sm:gap-x-8 px-4 sm:px-6 lg:px-8">
            <CollaboratorImage id={teamImageIds[0]} className="rotate-2" />
            <CollaboratorImage id={teamImageIds[1]} className="relative top-11 -rotate-2" />
            <CollaboratorImage id={teamImageIds[2]} className="relative top-5 scale-110 z-10" />
            <CollaboratorImage id={teamImageIds[3]} className="relative top-11 rotate-2" />
            <CollaboratorImage id={teamImageIds[4]} className="-rotate-2" />
        </div>
      </div>

      <Container>
        <CollaboratorsList />
      </Container>
    </div>
  );
};

export default CollaboratorsPage;
