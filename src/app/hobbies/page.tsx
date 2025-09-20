import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { HobbiesList } from "@/components/hobbies/HobbiesList";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { hobbiesPageData } from "@/lib/data/hobbies/hobbies";

export const metadata = {
  title: "My Hobbies | PortfolioFlow",
  description: "A look into my personal interests and hobbies outside of work.",
};

const HobbiesPage = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === hobbiesPageData.heroImageId);

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
          <h1 className="text-4xl font-black text-primary-foreground md:text-6xl">{hobbiesPageData.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {hobbiesPageData.description}
          </p>
        </Container>
      </div>

      <Container>
        <HobbiesList />
      </Container>
    </>
  );
};

export default HobbiesPage;
