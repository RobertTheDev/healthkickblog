import Link from 'next/link';
import recipes from './data/recipes';
import Recipe from './interfaces/Recipe';

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div>
        <div className="aspect-square w-full overflow-hidden rounded-lg">
          <img src={recipe.image} />
        </div>
        <div>
          <p>{recipe.name}</p>
        </div>
      </div>
    </Link>
  );
}

function RecipeCategorySection() {
  return (
    <div className="w-full">
      <div className="mt-20 flex justify-center">
        <h3 className="text-3xl font-bold">Cooking Tips & Techniques</h3>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-8 p-8">
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

function FeaturedRecipeSection() {
  return (
    <div className="grid gap-8 p-8 md:grid-cols-5">
      {/* Left section */}
      <div className="flex flex-col gap-8 md:col-span-1">
        {recipes.slice(0, 2).map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
            <div className="group cursor-pointer">
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-lg font-semibold">{recipe.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Middle section */}
      <div className="flex items-center justify-center md:col-span-3">
        <Link key={recipes[0].id} href={`/recipes/${recipes[0].id}`}>
          <div className="group w-full cursor-pointer">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <img
                src={recipes[0].image}
                alt={recipes[0].name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-2 text-center">
              <p className="text-xl font-bold">{recipes[0].name}</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Right section */}
      <div className="flex flex-col gap-8 md:col-span-1">
        {recipes.slice(2, 4).map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
            <div className="group cursor-pointer">
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-lg font-semibold">{recipe.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <FeaturedRecipeSection />
      <RecipeCategorySection />
      <RecipeCategorySection />
      <RecipeCategorySection />
      <RecipeCategorySection />
    </main>
  );
}
