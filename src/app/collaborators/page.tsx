import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { CollaboratorsList } from "@/components/collaborators/CollaboratorsList";
import { collaboratorsPageData } from "@/lib/data/collaborators/collaborators";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

export const metadata = {
  title: "Collaborators | PortfolioFlow",
  description: "People I've had the pleasure to work with.",
};

const CollaboratorImage = ({
  imageUrl,
  imageHint,
  className,
}: {
  imageUrl: string;
  imageHint: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative aspect-square w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-64 sm:rounded-2xl dark:bg-zinc-800",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt=""
        data-ai-hint={imageHint}
        fill
        className="object-cover"
      />
    </div>
  );
};

const CollaboratorsPage = () => {
  const firstRow = collaboratorsPageData.heroImages.slice(
    0,
    collaboratorsPageData.heroImages.length / 2
  );
  const secondRow = collaboratorsPageData.heroImages.slice(
    collaboratorsPageData.heroImages.length / 2
  );

  return (
    <div className="bg-background text-foreground">
      <div className="relative overflow-hidden py-16">
        <div className="animated-aurora" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {collaboratorsPageData.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              {collaboratorsPageData.description}
            </p>
          </div>
        </Container>
        <div className="relative mt-16 flex flex-col gap-4">
            <Marquee pauseOnHover>
                {firstRow.map((collaborator, i) => (
                    <CollaboratorImage key={`p1-${i}`} {...collaborator} />
                ))}
            </Marquee>
            <Marquee pauseOnHover reverse>
                {secondRow.map((collaborator, i) => (
                    <CollaboratorImage key={`p2-${i}`} {...collaborator} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>

      <Container>
        <CollaboratorsList />
      </Container>
    </div>
  );
};

export default CollaboratorsPage;