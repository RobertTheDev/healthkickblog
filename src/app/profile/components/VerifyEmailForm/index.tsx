export default function VerifyEmailForm() {
  return (
    <div className="mb-6">
      <div className="text-xl font-semibold">Verify Email</div>
      <div>
        <p className="mb-4 text-gray-700">
          Verify your email address to enhance security and receive account
          notifications.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700">
          Send Verification Email
        </button>
      </div>
    </div>
  );
}
