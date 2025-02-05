import { getFoodRecipeBySlug } from '@/app/utils/contentful/contentfulClient';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Recipe',
};

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const recipe = await getFoodRecipeBySlug(slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Header */}
      <div className="flex">
        <div className="w-1/2 p-8">
          <h1 className="text-6xl font-bold">{JSON.stringify(recipe)}</h1>
          <p className="mt-4 text-lg text-gray-600">
            A rich, moist, and indulgent treat perfect for every occasion.
          </p>
          {/* Nutritional Details */}
          <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
            <h2 className="mb-3 text-2xl font-semibold">Nutritional Details</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div>
                <p className="text-sm text-gray-500">Calories</p>
                <p className="text-lg font-bold">250 kcal</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Fat</p>
                <p className="text-lg font-bold">12g</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Carbohydrates</p>
                <p className="text-lg font-bold">32g</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Protein</p>
                <p className="text-lg font-bold">5g</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
            <h2 className="mb-3 text-2xl font-semibold">Ingredients</h2>
            <ul className="list-inside list-disc">
              <li>2 cups all-purpose flour</li>
              <li>1 3/4 cups sugar</li>
              <li>3/4 cup cocoa powder</li>
              <li>2 tsp baking powder</li>
              <li>1/2 tsp salt</li>
              <li>2 large eggs</li>
              <li>1 cup whole milk</li>
              <li>1/2 cup vegetable oil</li>
              <li>2 tsp vanilla extract</li>
            </ul>
          </div>
        </div>
        <div className="aspect-square w-1/2 bg-center">
          <div className="h-full w-full">
            <Image
              alt="Delicious Chocolate Cake"
              className="object-cover"
              fill
              src="https://assets.bonappetit.com/photos/6792a8775e23b55d62e96f0d/1:1/w_2240,c_limit/fgfp-super-citrusy-oatmeal_RECIPE_V2_012125_0066_VOG_final.jpg"
            />
          </div>
        </div>
      </div>

      {/* Rich Text Body */}
      <div className="rounded-xl bg-white p-4 shadow-md">
        <h2 className="mb-3 text-2xl font-semibold">Instructions</h2>
        <p className="mb-2">
          Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round
          baking pans.
        </p>
        <p className="mb-2">
          In a large mixing bowl, combine the flour, sugar, cocoa powder, baking
          powder, and salt. Mix well.
        </p>
        <p className="mb-2">
          Add the eggs, milk, vegetable oil, and vanilla extract to the dry
          ingredients. Beat with a mixer on medium speed for 2 minutes.
        </p>
        <p className="mb-2">
          Pour the batter evenly into the prepared pans. Bake for 30 to 35
          minutes or until a toothpick inserted into the center comes out clean.
        </p>
        <p>
          Allow the cakes to cool in the pans for 10 minutes, then transfer to
          wire racks to cool completely. Frost as desired and enjoy!
        </p>
      </div>
    </div>
  );
}
