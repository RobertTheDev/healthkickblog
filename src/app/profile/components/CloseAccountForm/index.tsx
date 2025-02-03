export default function CloseAccountForm() {
  return (
    <div className="mb-6">
      <div className="text-xl font-semibold">Close Account</div>
      <div>
        <p className="mb-4 text-red-700">
          Closing your account will permanently delete all your data. This
          action cannot be undone.
        </p>
        <button className="bg-red-600 hover:bg-red-700">Close Account</button>
      </div>
    </div>
  );
}
