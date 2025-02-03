import Recipe from '@/app/interfaces/Recipe';
import Link from 'next/link';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="overflow-hidden rounded-2xl bg-white shadow-lg hover:cursor-pointer"
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="aspect-square w-full rounded-t-2xl object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{recipe.name}</h2>
      </div>
    </Link>
  );
}
