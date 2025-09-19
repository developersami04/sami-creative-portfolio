import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Work } from "@/components/home/Work";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: "My Projects | PortfolioFlow",
  description: "A showcase of my projects and work.",
};

const ProjectsPage = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === "projects-hero");

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
          <h1 className="text-4xl font-black text-primary-foreground md:text-6xl">My Projects</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Here is a collection of my work, demonstrating my skills in design and development.
          </p>
        </Container>
      </div>
      <Container>
        <Work />
      </Container>
    </>
  );
};

export default ProjectsPage;
