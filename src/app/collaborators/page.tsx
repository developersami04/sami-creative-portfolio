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
    <figure
      className={cn(
        "relative w-44 h-44 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt=""
        data-ai-hint={imageHint}
        fill
        className="object-cover rounded-md"
      />
    </figure>
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
        
        <div className="relative mt-16 flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
            }}
          >
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstRow.map((collaborator, i) => (
                <CollaboratorImage key={`p1-${i}`} {...collaborator} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
              {secondRow.map((collaborator, i) => (
                <CollaboratorImage key={`p2-${i}`} {...collaborator} />
              ))}
            </Marquee>
             <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
              {firstRow.map((collaborator, i) => (
                <CollaboratorImage key={`p3-${i}`} {...collaborator} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]" vertical>
              {secondRow.map((collaborator, i) => (
                <CollaboratorImage key={`p4-${i}`} {...collaborator} />
              ))}
            </Marquee>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>

      <Container>
        <CollaboratorsList />
      </Container>
    </div>
  );
};

export default CollaboratorsPage;
