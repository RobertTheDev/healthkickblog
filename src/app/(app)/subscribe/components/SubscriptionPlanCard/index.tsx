import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import SubscriptionPlan from '../../interfaces/SubscriptionPlan';

export default function SubscriptionPlanCard({
  plan,
}: {
  plan: SubscriptionPlan;
}) {
  return (
    <div
      key={plan.id}
      className="flex flex-col rounded-lg bg-white p-8 shadow-md transition-shadow hover:shadow-md"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{plan.name}</h2>
        <p className="mb-4 text-lg font-semibold text-gray-500">
          ${plan.price} {plan.description}
        </p>
        <ul className="mb-4 flex flex-col gap-2.5 space-y-2">
          {plan.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2.5 text-gray-700"
            >
              <CheckCircle size={20} /> {benefit}
            </li>
          ))}
        </ul>
      </div>
      {plan.priceId ? (
        <Link
          href={`/subscribe/${plan.priceId}`}
          className="flex w-full items-center justify-center rounded-lg bg-[#173C24] px-6 py-3 font-semibold text-white"
        >
          Subscribe
        </Link>
      ) : (
        <Link
          href={`/`}
          className="flex w-full items-center justify-center rounded-lg bg-[#173C24] px-6 py-3 font-semibold text-white"
        >
          Explore
        </Link>
      )}
    </div>
  );
}
