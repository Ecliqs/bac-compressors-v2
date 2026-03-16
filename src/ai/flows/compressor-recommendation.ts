'use server';
/**
 * @fileOverview An AI-powered tool that provides initial compressor type recommendations.
 *
 * - compressorRecommendation - A function that handles the compressor recommendation process.
 * - CompressorRecommendationInput - The input type for the compressorRecommendation function.
 * - CompressorRecommendationOutput - The return type for the compressorRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CompressorRecommendationInputSchema = z.object({
  industry: z.string().describe('The industry the customer operates in.'),
  airDemand:
    z.string().describe('The air demand requirements for the customer (e.g., "small to medium air demand", "high air volume", "continuous industrial operations").'),
});
export type CompressorRecommendationInput = z.infer<typeof CompressorRecommendationInputSchema>;

const CompressorRecommendationOutputSchema = z.object({
  recommendedCompressor:
    z.enum(['Reciprocating', 'Screw']).describe('The recommended type of air compressor: "Reciprocating" or "Screw".'),
  reason: z.string().describe('A detailed explanation for the recommendation, referencing the operational needs.'),
});
export type CompressorRecommendationOutput = z.infer<typeof CompressorRecommendationOutputSchema>;

const prompt = ai.definePrompt({
  name: 'compressorRecommendationPrompt',
  input: {schema: CompressorRecommendationInputSchema},
  output: {schema: CompressorRecommendationOutputSchema},
  prompt: `You are an Intelligent Compressor Advisor Tool for BAC Air Solutions. Your task is to recommend the most suitable type of industrial air compressor (either "Reciprocating" or "Screw") based on the customer's operational needs.

Here are the details for BAC Air Solutions' compressors:

Reciprocating Air Compressors:
  - Description: Heavy-duty piston compressors designed for demanding industrial environments. Built with high-quality cast iron components and precision machining for durability and long service life.
  - Key Characteristics: Best for small to medium air demand, Lower upfront cost, Ideal for workshops and MSMEs, Suitable for workshops and small factories.
  - Performance: Reliable performance in harsh conditions, Not designed for continuous operation.

Screw Air Compressors:
  - Description: Energy-efficient rotary screw compressors designed for continuous industrial operations requiring high air volume and reliable performance.
  - Key Characteristics: Continuous operation capability, High air volume, Ideal for large factories, Lower noise levels, Lower maintenance cost.
  - Performance: Designed for continuous industrial operations.

Based on the following customer details, recommend either "Reciprocating" or "Screw" compressor and provide a detailed reason.

Customer Industry: {{{industry}}}
Customer Air Demand: {{{airDemand}}}`,
});

const compressorRecommendationFlow = ai.defineFlow(
  {
    name: 'compressorRecommendationFlow',
    inputSchema: CompressorRecommendationInputSchema,
    outputSchema: CompressorRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  },
);

export async function compressorRecommendation(
  input: CompressorRecommendationInput,
): Promise<CompressorRecommendationOutput> {
  return compressorRecommendationFlow(input);
}
