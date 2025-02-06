import Image from 'next/image';
import Link from 'next/link';
import featuredRecipes from './featuredRecipes';

function HeroSectionCard({
  title,
  image,
  slug,
}: {
  title: string;
  image: string;
  slug: string;
}) {
  return (
    <Link
      href={`/recipes/${slug}`}
      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <div className="relative aspect-square w-full">
        <Image src={image} fill className="object-cover" alt={title} />
      </div>
      <div className="p-5">
        <h4 className="text-xl font-bold text-[#193E20]">{title}</h4>
      </div>
    </Link>
  );
}

export default function HeroSection() {
  return (
    <section className="px-24 py-20">
      <h1 className="text-center text-5xl font-bold text-[#193E20]">
        Kick Start Your Health With Our Delicious Recipes
      </h1>
      <div className="mt-24 flex flex-col items-start justify-between gap-20 lg:flex-row">
        <div className="flex w-full flex-col gap-10 lg:w-1/4">
          {featuredRecipes.slice(0, 2).map((recipe) => (
            <HeroSectionCard
              key={recipe.id}
              title={recipe.name}
              image={recipe.image}
              slug={recipe.id}
            />
          ))}
        </div>

        <div className="w-full lg:w-2/4">
          <HeroSectionCard
            title={featuredRecipes[2].name}
            image={featuredRecipes[2].image}
            slug={featuredRecipes[2].id}
          />
        </div>

        <div className="flex w-full flex-col gap-10 lg:w-1/4">
          {featuredRecipes.slice(3, 5).map((recipe) => (
            <HeroSectionCard
              key={recipe.id}
              title={recipe.name}
              image={recipe.image}
              slug={recipe.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
