import recipes from '@/app/data/recipes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recipe',
};

export default async function Recipe({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const recipe = recipes.find((recipe) => recipe.id === slug);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <main>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} />
    </main>
  );
}
