import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hobbiesData } from "@/lib/data/hobbies";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HobbiesList() {
  return (
    <section id="hobbies" className="py-16 md:py-24">
       <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What I Do For Fun
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          A glimpse into my passions outside of the digital world.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {hobbiesData.map((hobby) => {
          const hobbyImage = PlaceHolderImages.find((img) => img.id === hobby.imageId);
          return (
            <Card key={hobby.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {hobbyImage && (
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={hobbyImage.imageUrl}
                    alt={hobby.title}
                    data-ai-hint={hobbyImage.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold">{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
