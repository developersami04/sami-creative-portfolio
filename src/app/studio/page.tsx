import { BioGenerator } from "@/components/studio/BioGenerator";
import { ProjectDescGenerator } from "@/components/studio/ProjectDescGenerator";
import { StudioHero } from "@/components/studio/StudioHero";
import { Container } from "@/components/shared/Container";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "The Studio | PortfolioFlow",
  description: "A creative space for experiments and AI-powered tools.",
};

const StudioPage = () => {
  return (
    <>
      <StudioHero />
      <Container className="py-16 md:py-24 space-y-16">
        <BioGenerator />
        <Separator />
        <ProjectDescGenerator />
      </Container>
    </>
  );
};

export default StudioPage;
