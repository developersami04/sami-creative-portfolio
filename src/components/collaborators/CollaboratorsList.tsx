import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { collaboratorsData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Quote } from "lucide-react";

export function CollaboratorsList() {
  return (
    <section id="collaborators" className="py-16 md:py-24">
       <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Kind Words From Great People
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Testimonials from colleagues and partners.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {collaboratorsData.map((collaborator) => {
          const collaboratorImage = PlaceHolderImages.find((img) => img.id === collaborator.imageId);
          return (
            <Card key={collaborator.id} className="flex flex-col text-center">
              <CardContent className="pt-6">
                <div className="relative mx-auto h-24 w-24">
                    {collaboratorImage && (
                        <Image
                            src={collaboratorImage.imageUrl}
                            alt={collaborator.name}
                            data-ai-hint={collaboratorImage.imageHint}
                            fill
                            className="rounded-full object-cover"
                        />
                    )}
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl font-bold">{collaborator.name}</CardTitle>
                  <CardDescription>{collaborator.title}</CardDescription>
                </CardHeader>
                <div className="relative mt-4 flex-grow px-4">
                  <Quote className="absolute -top-2 left-0 h-6 w-6 text-accent/50" />
                  <p className="text-muted-foreground italic">{collaborator.testimonial}</p>
                  <Quote className="absolute -bottom-2 right-0 h-6 w-6 text-accent/50" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
