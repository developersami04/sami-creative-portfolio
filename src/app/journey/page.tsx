import Image from "next/image";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { Container } from "@/components/shared/Container";
import { journeyPageData } from "@/lib/data/journey/timeline";

export const metadata = {
  title: "My Journey | PortfolioFlow",
  description: "A timeline of my professional experience and growth.",
};

const JourneyPage = () => {
  return (
    <>
      <div className="relative h-[40vh] min-h-[300px] w-full">
        {journeyPageData.heroImageUrl && (
          <Image
            src={journeyPageData.heroImageUrl}
            alt={journeyPageData.title}
            data-ai-hint={journeyPageData.heroImageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-primary-foreground md:text-6xl">{journeyPageData.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {journeyPageData.description}
          </p>
        </Container>
      </div>

      <Container>
        <JourneyTimeline />
      </Container>
    </>
  );
};

export default JourneyPage;
