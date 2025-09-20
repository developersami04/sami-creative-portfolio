import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SkillsList } from "@/components/skills/SkillsList";
import { skillsPageData } from "@/lib/data/skills/skills";

export const metadata = {
  title: "My Skills | PortfolioFlow",
  description: "A showcase of my technical skills and expertise.",
};

const SkillsPage = () => {
  return (
    <>
      <div className="relative h-[40vh] min-h-[300px] w-full">
        {skillsPageData.heroImageUrl && (
          <Image
            src={skillsPageData.heroImageUrl}
            alt={skillsPageData.title}
            data-ai-hint={skillsPageData.heroImageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="animated-aurora" />
        <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-primary-foreground md:text-6xl">{skillsPageData.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {skillsPageData.description}
          </p>
        </Container>
      </div>
      <Container>
        <SkillsList />
      </Container>
    </>
  );
};

export default SkillsPage;
