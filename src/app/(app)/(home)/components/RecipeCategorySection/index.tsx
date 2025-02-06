import recipes from '@/app/data/recipes';
import Image from 'next/image';
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
      className={`px-20 py-24 ${bgGreen ? 'bg-[#FCF8E2]' : 'bg-[#fff]'}`}
    >
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#193E20]">
          {title}
        </h1>
        <p className="mt-6 text-xl font-semibold leading-relaxed text-[#193E20]">
          {description}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-20">
        {recipes
          .filter((recipe) => recipe.category === category)
          .slice(0, 4)
          .map((recipe) => (
            <Link
              href={`/recipes/${recipe.id}`}
              key={recipe.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={recipe.image}
                  fill
                  className="object-cover"
                  alt={recipe.name}
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-[#193E20]">
                  {recipe.name}
                </h4>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
