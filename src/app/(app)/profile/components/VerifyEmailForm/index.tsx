export default function VerifyEmailForm() {
  return (
    <div className="mb-6 rounded-xl bg-white p-8 shadow-md">
      <div className="text-xl font-bold">Verify Email</div>
      <div>
        <p className="mt-6 text-gray-700">
          Verify your email address to enhance security and receive account
          notifications.
        </p>
        <button
          className={`mt-6 w-full rounded-lg bg-black px-5 py-3 font-semibold text-white transition-all hover:bg-gray-700 focus:ring-2 focus:ring-black focus:ring-offset-2`}
        >
          Send Verification Email
        </button>
      </div>
    </div>
  );
}
