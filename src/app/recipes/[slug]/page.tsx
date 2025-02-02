import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recipe',
};

export default function Recipe({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  );
}
