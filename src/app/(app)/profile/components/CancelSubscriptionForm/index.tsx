export default function CancelSubscriptionForm() {
  return (
    <div className="mb-6 rounded-xl bg-white p-8 shadow-md">
      <div className="text-xl font-bold">Cancel Subscription Plan</div>
      <div>
        <p className="mt-6 text-gray-700">
          Cancel your current subscription plan. You will retain access until
          the billing cycle ends.
        </p>
        <button
          className={`mt-6 w-full rounded-lg bg-black px-5 py-3 font-semibold text-white transition-all hover:bg-gray-700 focus:ring-2 focus:ring-black focus:ring-offset-2`}
        >
          Cancel Subscription
        </button>
      </div>
    </div>
  );
}
