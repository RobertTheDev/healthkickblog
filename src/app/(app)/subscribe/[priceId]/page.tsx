import { redirect } from 'next/navigation';
import { CheckoutForm } from '../components/CheckoutForm';
import { validPriceIds } from '../lib/validPriceIds';

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ priceId: string }>;
}) {
  const priceId = (await params).priceId;

  if (!validPriceIds.includes(priceId)) {
    redirect('/subscribe');
  }

  return (
    <main>
      <div className="mx-auto my-8 max-w-screen-lg">
        <CheckoutForm priceId={priceId} />
      </div>
    </main>
  );
}
