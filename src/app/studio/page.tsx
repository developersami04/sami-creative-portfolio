import { StudioHero } from "@/components/studio/StudioHero";
import { Container } from "@/components/shared/Container";
import { StudioGallery } from "@/components/studio/StudioGallery";

export const metadata = {
  title: "The Studio | PortfolioFlow",
  description: "A creative space for showcasing photography, videography, and other artistic works.",
};

const StudioPage = () => {
  return (
    <>
      <StudioHero />
      <Container className="py-16 md:py-24">
        <StudioGallery />
      </Container>
    </>
  );
};

export default StudioPage;
