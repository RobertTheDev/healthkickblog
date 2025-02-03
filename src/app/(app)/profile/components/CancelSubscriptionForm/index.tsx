export default function CancelSubscriptionForm() {
  return (
    <div>
      <div className="text-xl font-semibold">Cancel Subscription Plan</div>
      <div>
        <p className="mb-4 text-gray-700">
          Cancel your current subscription plan. You will retain access until
          the billing cycle ends.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600">
          Cancel Subscription
        </button>
      </div>
    </div>
  );
}
