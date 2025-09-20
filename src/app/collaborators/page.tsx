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

const CollaboratorImage = ({ id, index }: { id: string, index: number }) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) return null;

  const rotations = [
    "rotate-[-6deg]",
    "rotate-[4deg]",
    "rotate-[-3deg]",
    "rotate-[5deg]",
    "rotate-[-2deg]",
  ];

  const colors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-green-500",
    "bg-pink-500",
  ];

  return (
    <div
      className={cn(
        "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl",
        rotations[index % rotations.length]
      )}
    >
      <div className={cn("absolute inset-0 rounded-xl sm:rounded-2xl", colors[index % colors.length])} />
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
  return (
    <div className="bg-gray-900 text-white">
      <div className="overflow-hidden py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Meet our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A diverse team of passionate professionals with unique skills driving innovation and excellence in every project.
            </p>
          </div>
        </Container>
        <div className="mt-16">
          <div
            className="-m-4 flex justify-center gap-8 overflow-hidden p-4 sm:-m-8 sm:gap-12 sm:p-8"
          >
            {collaboratorsData.map((collaborator, index) => (
              <CollaboratorImage key={collaborator.id} id={collaborator.imageId} index={index} />
            ))}
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
