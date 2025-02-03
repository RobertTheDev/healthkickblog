import recipes from '@/app/data/recipes';
import Link from 'next/link';

export default function RecipeCategorySection({
  category,
  title,
  description,
  bgGreen = false,
}: {
  category: string;
  title: string;
  description: string;
  bgGreen?: boolean;
}) {
  return (
    <section
      className={`${bgGreen ? 'bg-[#FCF8E2]' : 'bg-[#FFFFFF]'} min-h-screen px-12 py-24`}
    >
      <div className="mx-auto mb-16 max-w-7xl text-center">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-800">
          {title}
        </h1>
        <p className="text-xl leading-relaxed text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {recipes
          .filter((recipe) => recipe.category === category)
          .slice(0, 4)
          .map((recipe) => (
            <Link
              href={`/recipes/${recipe.id}`}
              key={recipe.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg hover:cursor-pointer"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="aspect-square w-full rounded-t-2xl object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {recipe.name}
                </h2>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
