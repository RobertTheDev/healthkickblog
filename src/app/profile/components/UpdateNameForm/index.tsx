export default function UpdateNameForm() {
  return (
    <div className="mb-6">
      <div className="text-xl font-semibold">Change Name</div>
      <div>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="New Name" className="w-full" />
          <button className="w-full bg-blue-600 hover:bg-blue-700">
            Update Name
          </button>
        </form>
      </div>
    </div>
  );
}
