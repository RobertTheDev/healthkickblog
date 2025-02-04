export default function CloseAccountForm() {
  return (
    <div className="mb-6 rounded-xl bg-white p-8 shadow-md">
      <div className="text-xl font-bold">Close Account</div>
      <div>
        <p className="mt-6 text-red-700">
          Closing your account will permanently delete all your data. This
          action cannot be undone.
        </p>
        <button
          className={`mt-6 w-full rounded-lg bg-red-700 px-5 py-3 font-semibold text-white transition-all hover:bg-red-800 focus:ring-2 focus:ring-red-800 focus:ring-offset-2`}
        >
          Close Account
        </button>
      </div>
    </div>
  );
}
