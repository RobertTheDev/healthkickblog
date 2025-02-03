import { Metadata } from 'next';
import SubscriptionPlanCard from './components/SubscriptionPlanCard';
import { subscriptionPlans } from './lib/subscriptionPlans';

export const metadata: Metadata = {
  title: 'Subscribe',
};

export default function Subscribe() {
  return (
    <main className="min-h-screen bg-[#fcf8e2] px-4 py-12">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900">
          Let&apos;s Make Something Together
        </h1>
        <p className="text-lg text-gray-600">
          Get unlimited access to all of Healthkick&apos;s recipes and meal
          plans.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <SubscriptionPlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </main>
  );
}
