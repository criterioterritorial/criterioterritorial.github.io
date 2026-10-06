import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const studies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/estudios' }),
  schema: z.object({
    code: z.string().regex(/^CT \/ (MERCADO|CIUDAD|SOCIEDAD|AMBIENTE|TERRITORIO) \/ \d{3}$/),
    category: z.enum(['Mercado', 'Ciudad', 'Sociedad', 'Ambiente', 'Territorio']),
    title: z.string(),
    summary: z.string(),
    location: z.string(),
    year: z.number().int(),
    image: z.string(),
    imageAlt: z.string(),
    status: z.enum(['En preparación', 'Publicado']),
    methodology: z.array(z.string()),
    results: z.array(z.string()),
    sources: z.array(z.object({ name: z.string(), url: z.url().optional() })),
    reportUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
  }),
});
export const collections = { studies };
