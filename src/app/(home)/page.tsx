import HeroSection from './components/HeroSection';
import RecipeCategorySection from './components/RecipeCategorySection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RecipeCategorySection
        category="pasta"
        title="Pasta Recipes"
        description="Delicious pasta recipes curated just for you."
      />
      <RecipeCategorySection
        bgGreen
        category="rice"
        title="Rice Recipes"
        description="Delicious rice recipes curated just for you."
      />
      <RecipeCategorySection
        category="salads"
        title="Salad Recipes"
        description="Delicious salad recipes curated just for you."
      />
      <RecipeCategorySection
        bgGreen
        category="soups"
        title="Soup Recipes"
        description="Delicious soup recipes curated just for you."
      />
    </main>
  );
}
