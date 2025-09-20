"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateProjectDescriptionAction } from "@/app/actions";
import { BookText, Loader2, Clipboard, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  projectName: z.string().min(2, { message: "Project name must be at least 2 characters." }),
  projectType: z.string().min(3, { message: "Project type must be at least 3 characters." }),
  projectTechStack: z.string().min(3, { message: "Please list at least one technology." }),
  projectDescriptionKeywords: z.string().min(3, { message: "Please provide at least one keyword." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ProjectDescGenerator() {
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      projectType: "",
      projectTechStack: "",
      projectDescriptionKeywords: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setDescription("");

    const { description: newDescription, error } = await generateProjectDescriptionAction(data);

    setIsLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: error,
      });
    } else if (newDescription) {
      setDescription(newDescription);
    }
  };
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <BookText className="h-6 w-6 text-accent" />
            AI Project Description Generator
          </CardTitle>
          <CardDescription>
            Fill out the form to generate a compelling project description with AI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Apex-Sky" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Web Application, Mobile App" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectTechStack"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tech Stack (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Python, Django, PostgreSQL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectDescriptionKeywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords (comma-separated)</FormLabel>
                    <FormControl>
                       <Textarea
                        placeholder="e.g., project management, user-friendly, API integration"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
                ) : (
                  <>Generate Description</>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-headline">Generated Description</h3>
        {isLoading && (
            <Card className="animate-pulse">
                <CardContent className="p-6">
                    <div className="space-y-3">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-full"></div>
                        <div className="h-4 bg-muted rounded w-5/6"></div>
                        <div className="h-4 bg-muted rounded w-4/5"></div>
                        <div className="h-4 bg-muted rounded w-full"></div>
                    </div>
                </CardContent>
            </Card>
        )}
        {!isLoading && !description && (
          <Card className="flex h-64 items-center justify-center border-dashed">
            <p className="text-muted-foreground">Your AI-generated description will appear here.</p>
          </Card>
        )}
        {description && (
            <Card className="relative">
                <CardContent className="p-6">
                  <p className="text-foreground/90 whitespace-pre-wrap">{description}</p>
                </CardContent>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:bg-accent/10 hover:text-accent"
                    onClick={() => handleCopy(description)}
                    aria-label="Copy description"
                >
                    {isCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                </Button>
            </Card>
        )}
      </div>
    </div>
  );
}
