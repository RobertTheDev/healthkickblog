import recipes from '@/app/data/recipes';
import { Metadata } from 'next';
import RecipeCard from './components/RecipeCard';

export const metadata: Metadata = {
  title: 'Recipes',
};

export default function Recipes({ params }: { params: { slug: string } }) {
  return (
    <main>
      <div className="bg-[#FCF8E2] px-8 py-16">
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
      </div>
    </main>
  );
}
