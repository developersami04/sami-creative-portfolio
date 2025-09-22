
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateImage } from "@/ai/flows/image-generation-flow";
import Image from "next/image";

export function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const handleGenerate = async () => {
    if (!prompt) {
      toast({
        title: "Prompt is required",
        description: "Please enter a prompt to generate an image.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setGeneratedImage(null);

    try {
      const result = await generateImage({ prompt });
      if (result.imageUrl) {
        setGeneratedImage(result.imageUrl);
        toast({
          title: "Image Generated!",
          description: "Your creation has been added to the gallery.",
        });
        // Refresh the page to show the new image in the gallery
        router.refresh();
      } else {
        throw new Error("Image generation failed to return an image.");
      }
    } catch (error) {
      console.error("Image generation error:", error);
      toast({
        title: "Generation Failed",
        description:
          "Something went wrong while generating the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="image-generator" className="py-16 md:py-24 border-b">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-accent" />
            AI Image Generator
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Create your own digital art. Type a prompt and let our AI bring your vision to life. Your creations will be added to the studio gallery.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Generate an Image</CardTitle>
          <CardDescription>
            Enter a descriptive prompt for the image you want to create.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Input
              placeholder="e.g., A majestic dragon soaring over a mystical forest"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
            />
            {loading && (
              <div className="flex flex-col items-center justify-center gap-4 p-8">
                <Loader2 className="h-12 w-12 animate-spin text-accent" />
                <p className="text-muted-foreground">Generating your masterpiece... this may take a moment.</p>
              </div>
            )}
            {generatedImage && !loading && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                <Image
                  src={generatedImage}
                  alt={prompt}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerate} disabled={loading} className="w-full">
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Generate
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
