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

const CollaboratorImage = ({ id, className, colorClass }: { id: string; className: string; colorClass: string }) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) return null;

  return (
    <div
      className={cn(
        "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl shadow-2xl",
        className
      )}
    >
      <div className={cn("absolute inset-0 rounded-xl sm:rounded-2xl", colorClass)} />
      <Image
        src={image.imageUrl}
        alt={image.description}
        data-ai-hint={image.imageHint}
        fill
        className="absolute inset-0 h-full w-full object-cover p-2"
        priority
      />
    </div>
  );
};


const CollaboratorsPage = () => {
  const teamImages = collaboratorsData.slice(0, 5);

  return (
    <div className="bg-gray-900 text-white">
      <div className="overflow-hidden py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Meet our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A diverse team of passionate professionals with unique skills driving innovation and excellence in every project.
            </p>
          </div>
        </Container>
        <div className="mt-16 flex justify-center">
          <div className="relative flex w-full max-w-5xl items-center justify-center">
              <CollaboratorImage id={teamImages[0].imageId} className="z-10 -rotate-6" colorClass="bg-violet-500" />
              <CollaboratorImage id={teamImages[1].imageId} className="-ml-12 rotate-3" colorClass="bg-indigo-500" />
              <CollaboratorImage id={teamImages[2].imageId} className="z-20 -ml-12 scale-110" colorClass="bg-gray-800" />
              <CollaboratorImage id={teamImages[3].imageId} className="-ml-12 -rotate-3" colorClass="bg-orange-500" />
              <CollaboratorImage id={teamImages[0].imageId} className="z-10 -ml-12 rotate-6" colorClass="bg-rose-500" />
          </div>
        </div>
      </div>

      <Container>
        <CollaboratorsList />
      </Container>
    </div>
  );
};

export default CollaboratorsPage;
