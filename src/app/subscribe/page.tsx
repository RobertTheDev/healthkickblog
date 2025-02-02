import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subscribe',
};

interface SubscriptionPlan {
  id: string;
  name: string;
  currency: string;
  price: number;
  description: string;
  benefits: string[];
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free',
    currency: 'USD',
    price: 0,
    description: 'Trial',
    benefits: [
      'Unlimited access to all features',
      'No credit card required',
      'Cancel anytime',
    ],
  },
  {
    id: 'monthly',
    name: 'Monthly',
    currency: 'USD',
    price: 19,
    description: 'per month, billed monthly',
    benefits: [
      'Unlimited access to all features',
      'No credit card required',
      'Cancel anytime',
    ],
  },
  {
    id: 'annual',
    name: 'Annual',
    currency: 'USD',
    price: 10,
    description: 'per month, billed annually',
    benefits: [
      'Unlimited access to all features',
      'No credit card required',
      'Cancel anytime',
    ],
  },
];

export default function Subscribe() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900">
          Let&apos;s Make Something Together
        </h1>
        <p className="text-lg text-gray-600">
          Get unlimited access to all of Healthkick&apos;s recipes and meal
          plans.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-bold text-gray-800">
              {plan.name}
            </h2>
            <p className="mb-4 text-lg text-gray-500">
              {plan.currency} {plan.price} {plan.description}
            </p>
            <ul className="mb-4 space-y-2">
              {plan.benefits.map((benefit) => (
                <li key={benefit} className="text-gray-700">
                  &bull; {benefit}
                </li>
              ))}
            </ul>
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
