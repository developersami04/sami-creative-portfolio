"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skillsData, skillsPageData } from "@/lib/data/skills/skills";
import { workData } from "@/lib/data/projects/work";
import { useEffect, useState } from "react";

export function SkillsList() {
  const [projectCounts, setProjectCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const counts: Record<string, number> = {};
    skillsData.forEach(skill => {
      const count = workData.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === skill.name.toLowerCase())
      ).length;
      counts[skill.name] = count;
    });
    setProjectCounts(counts);
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {skillsPageData.list.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          {skillsPageData.list.description}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map(skill => (
          <Card key={skill.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{skill.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Proficiency</p>
                  <span className="text-sm font-bold text-accent">{skill.proficiency}%</span>
                </div>
                <Progress value={skill.proficiency} className="h-2" />
              </div>
              <Accordion type="single" collapsible className="w-full mt-4">
                <AccordionItem value={`item-${skill.id}`} className="border-b-0">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-2">
                    Skill Details
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pt-2">
                    <p>{skill.description}</p>
                    <p className="mt-2 font-medium text-foreground">
                      Used in <span className="font-bold text-accent">{projectCounts[skill.name] || 0}</span> project(s).
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
