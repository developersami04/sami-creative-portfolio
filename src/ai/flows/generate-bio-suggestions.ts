'use server';

/**
 * @fileOverview An AI agent for generating personal bio suggestions.
 *
 * - generateBioSuggestions - A function that generates bio suggestions.
 * - GenerateBioSuggestionsInput - The input type for the generateBioSuggestions function.
 * - GenerateBioSuggestionsOutput - The return type for the generateBioSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBioSuggestionsInputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  title: z.string().describe('The job title of the person.'),
  skills: z.array(z.string()).describe('A list of skills the person possesses.'),
  experience: z.string().describe('A summary of the person\'s work experience.'),
});
export type GenerateBioSuggestionsInput = z.infer<
  typeof GenerateBioSuggestionsInputSchema
>;

const GenerateBioSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of suggested bio texts.'),
});
export type GenerateBioSuggestionsOutput = z.infer<
  typeof GenerateBioSuggestionsOutputSchema
>;

export async function generateBioSuggestions(
  input: GenerateBioSuggestionsInput
): Promise<GenerateBioSuggestionsOutput> {
  return generateBioSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBioSuggestionsPrompt',
  input: {schema: GenerateBioSuggestionsInputSchema},
  output: {schema: GenerateBioSuggestionsOutputSchema},
  prompt: `You are a professional bio writer. Generate a few different versions of a short bio for the person described below.

Name: {{name}}
Title: {{title}}
Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Experience: {{experience}}

Write the bios in a way that is compelling and highlights their skills and experience. Each bio should be no more than 150 words.`,
});

const generateBioSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateBioSuggestionsFlow',
    inputSchema: GenerateBioSuggestionsInputSchema,
    outputSchema: GenerateBioSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
