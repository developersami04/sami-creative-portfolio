import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { workData } from "@/lib/data/projects/work";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Work() {
  return (
    <section id="work" className="py-16 md:py-24 border-t">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          A selection of projects that I'm proud of.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {workData.map((project) => {
          const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
          return (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {projectImage && (
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    data-ai-hint={projectImage.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Can add more content here if needed */}
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}