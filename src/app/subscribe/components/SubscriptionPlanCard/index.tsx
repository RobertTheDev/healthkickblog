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
          {plan.currency} {plan.price} {plan.description}
        </p>
        <ul className="mb-4 space-y-2">
          {plan.benefits.map((benefit) => (
            <li key={benefit} className="text-gray-700">
              &bull; {benefit}
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full rounded-lg bg-[#173C24] px-6 py-3 font-semibold text-white">
        Subscribe
      </button>
    </div>
  );
}
