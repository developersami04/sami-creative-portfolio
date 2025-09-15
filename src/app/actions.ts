"use server";

import { generateBioSuggestions, GenerateBioSuggestionsInput } from "@/ai/flows/generate-bio-suggestions";

export async function generateBioAction(input: GenerateBioSuggestionsInput) {
  try {
    const result = await generateBioSuggestions(input);
    return { suggestions: result.suggestions, error: null };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { suggestions: null, error: `Failed to generate suggestions: ${errorMessage}` };
  }
}
