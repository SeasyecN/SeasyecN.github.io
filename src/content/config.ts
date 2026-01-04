import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content', // v2.5.0+; 'content' for Markdown/MDX, 'data' for JSON/YAML
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		date: z.date(),
		author: z.string().default('RetroUser'),
		image: z.string().optional(),
	}),
});

const pagesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
	}),
});

export const collections = {
	'blog': blogCollection,
	'pages': pagesCollection,
};
