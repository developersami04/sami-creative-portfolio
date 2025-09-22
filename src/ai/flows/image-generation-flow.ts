
'use server';
/**
 * @fileOverview An AI flow for generating images from text prompts.
 *
 * - generateImage - A function that handles image generation and saving.
 * - GenerateImageInput - The input type for the generateImage function.
 * - GenerateImageOutput - The return type for the generateImage function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { promises as fs } from 'fs';
import path from 'path';

const GenerateImageInputSchema = z.object({
  prompt: z.string().describe('The text prompt to generate an image from.'),
});
export type GenerateImageInput = z.infer<typeof GenerateImageInputSchema>;

const GenerateImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});
export type GenerateImageOutput = z.infer<typeof GenerateImageOutputSchema>;

// This defines the path to the JSON file where image data will be stored.
const jsonFilePath = path.join(process.cwd(), 'src', 'lib', 'ai-generated-images.json');

async function saveImageData(imageData: {
  id: number;
  title: string;
  description: string;
  category: "AI Generated";
  imageUrl: string;
  imageHint: string;
}) {
  try {
    const fileContent = await fs.readFile(jsonFilePath, 'utf-8');
    const data = JSON.parse(fileContent);
    data.push(imageData);
    await fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    // If the file doesn't exist, create it with the first image.
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      await fs.writeFile(jsonFilePath, JSON.stringify([imageData], null, 2));
    } else {
      console.error('Failed to save image data:', error);
      throw error;
    }
  }
}

export async function generateImage(input: GenerateImageInput): Promise<GenerateImageOutput> {
  return generateImageFlow(input);
}

const generateImageFlow = ai.defineFlow(
  {
    name: 'generateImageFlow',
    inputSchema: GenerateImageInputSchema,
    outputSchema: GenerateImageOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.prompt,
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed to produce an image.');
    }
    
    const imageUrl = media.url;

    // Save the image metadata to our JSON file
    const newImage = {
      id: Date.now(), // Use timestamp for a unique ID
      title: "AI Creation",
      description: input.prompt,
      category: "AI Generated" as const,
      imageUrl: imageUrl,
      imageHint: input.prompt.split(' ').slice(0, 2).join(' '), // Use first two words of prompt as hint
    };

    await saveImageData(newImage);

    return { imageUrl };
  }
);
