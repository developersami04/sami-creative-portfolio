import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { projectsPageData } from "@/lib/data/projects/work";
import { ProjectList } from "@/components/projects/ProjectList";

export const metadata = {
  title: "My Projects | PortfolioFlow",
  description: "A showcase of my projects and work.",
};

const ProjectsPage = () => {
  return (
    <>
      <div className="relative h-[40vh] min-h-[300px] w-full">
        {projectsPageData.heroImageUrl && (
          <Image
            src={projectsPageData.heroImageUrl}
            alt={projectsPageData.title}
            data-ai-hint={projectsPageData.heroImageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-primary-foreground md:text-6xl">{projectsPageData.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {projectsPageData.description}
          </p>
        </Container>
      </div>
      <Container>
        <ProjectList />
      </Container>
    </>
  );
};

export default ProjectsPage;
