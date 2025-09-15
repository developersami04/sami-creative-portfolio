'use server';

/**
 * @fileOverview An AI agent that generates project descriptions.
 *
 * - generateProjectDescription - A function that generates a project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectType: z.string().describe('The type of the project (e.g., web application, mobile app, etc.).'),
  projectTechStack: z.string().describe('The technology stack used in the project (e.g., React, Node.js, etc.).'),
  projectDescriptionKeywords: z.string().describe('Keywords that describe the project. (e.g., e-commerce, social media, etc.)'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  projectDescription: z.string().describe('A detailed and engaging description of the project.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are a creative copywriter specializing in writing engaging project descriptions for portfolios.

  Based on the information provided, write a compelling and detailed description of the project.

  Project Name: {{{projectName}}}
  Project Type: {{{projectType}}}
  Technology Stack: {{{projectTechStack}}}
  Keywords: {{{projectDescriptionKeywords}}}
  Description:`, // Removed triple curly braces here.  This is the actual description.
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
