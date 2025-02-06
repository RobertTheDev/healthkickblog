import { createClient } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful environment variables not set');
}

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getFoodRecipesByCategory(category: string) {
  return await contentfulClient.getEntries({
    content_type: 'foodRecipe',
    'fields.category': category,
  });
}

export async function getFoodRecipesByFeatured() {
  return await contentfulClient.getEntries({
    content_type: 'foodRecipe',
    'fields.featured': true,
  });
}

export async function getFoodRecipeBySlug(slug: string) {
  const response = await contentfulClient.getEntries({
    content_type: 'foodRecipe',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0];
}
