import { getFoodRecipesByCategory } from '@/app/utils/contentful/contentfulClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recipes',
};

export default async function Recipes({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const category = (await params).slug;

  const response = await getFoodRecipesByCategory(category);

  const recipes = response.items;

  return (
    <main>
      <p>{JSON.stringify(recipes)}</p>
      {/* <div className="bg-[#FCF8E2] px-8 py-16">
        <div className="mx-auto mb-16 max-w-7xl text-center">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-800">
            Title
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">Description</p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {recipes
            .filter((recipe) => recipe.category === params.slug)
            .map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
      </div> */}
    </main>
  );
}
