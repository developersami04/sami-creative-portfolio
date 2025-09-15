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
import { generateBioAction } from "@/app/actions";
import { Wand2, Loader2, Clipboard, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  skills: z.string().min(3, { message: "Please list at least one skill." }),
  experience: z.string().min(20, { message: "Experience summary must be at least 20 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function BioGenerator() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      skills: "",
      experience: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setSuggestions([]);

    const { suggestions: newSuggestions, error } = await generateBioAction({
        ...data,
        skills: data.skills.split(',').map(s => s.trim()),
    });

    setIsLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: error,
      });
    } else if (newSuggestions) {
      setSuggestions(newSuggestions);
    }
  };
  
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Wand2 className="h-6 w-6 text-accent" />
            AI Bio Generator
          </CardTitle>
          <CardDescription>
            Fill out the form to generate professional bio suggestions using AI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Senior Software Engineer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., React, TypeScript, UI/UX Design" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly describe your work experience and achievements..."
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
                  <>Generate Suggestions</>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-headline">Suggestions</h3>
        {isLoading && (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                        <div className="space-y-3">
                            <div className="h-4 bg-muted rounded w-3/4"></div>
                            <div className="h-4 bg-muted rounded w-full"></div>
                            <div className="h-4 bg-muted rounded w-5/6"></div>
                        </div>
                    </CardContent>
                </Card>
            ))}
          </div>
        )}
        {!isLoading && suggestions.length === 0 && (
          <Card className="flex h-64 items-center justify-center border-dashed">
            <p className="text-muted-foreground">Your AI-generated bios will appear here.</p>
          </Card>
        )}
        {suggestions.length > 0 && (
            <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                <Card key={index} className="relative">
                    <CardContent className="p-6">
                    <p className="text-foreground/90">{suggestion}</p>
                    </CardContent>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:bg-accent/10 hover:text-accent"
                        onClick={() => handleCopy(suggestion, index)}
                        aria-label="Copy suggestion"
                    >
                        {copiedIndex === index ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </Button>
                </Card>
                ))}
            </div>
        )}
      </div>
    </div>
  );
}
