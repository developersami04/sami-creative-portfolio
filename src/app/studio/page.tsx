import { BioGenerator } from "@/components/studio/BioGenerator";
import { StudioHero } from "@/components/studio/StudioHero";
import { Container } from "@/components/shared/Container";

export const metadata = {
  title: "The Studio | PortfolioFlow",
  description: "A creative space for experiments and AI-powered tools.",
};

const StudioPage = () => {
  return (
    <>
      <StudioHero />
      <Container className="py-16 md:py-24">
        <BioGenerator />
      </Container>
    </>
  );
};

export default StudioPage;
