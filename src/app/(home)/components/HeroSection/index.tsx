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
    <Link href={`/recipes/${slug}`}>
      <div className="flex flex-col items-start">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-lg">
          <Image src={image} fill className="object-cover" alt={title} />
        </div>
        <h4 className="mt-4 text-xl font-bold text-gray-800">{title}</h4>
      </div>
    </Link>
  );
}

export default function HeroSection() {
  return (
    <section className="h-1/2 bg-[#FCF8E2] px-8 py-16">
      <h1 className="mb-16 text-center text-5xl font-bold text-gray-800">
        Kick Start Your Health With Our Delicious Recipes
      </h1>
      <div className="flex flex-col items-start justify-between gap-16 lg:flex-row">
        <div className="flex w-full flex-col gap-8 lg:w-1/4">
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

        <div className="flex w-full flex-col gap-8 lg:w-1/4">
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
