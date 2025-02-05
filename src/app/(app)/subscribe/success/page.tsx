import { House } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-start px-8">
      <h1 className="mt-12 text-5xl font-bold text-gray-800">
        Payment Successful
      </h1>
      <p className="mt-6 text-center font-semibold text-gray-700">
        Thank you for subscribing to Healthkick. You now have full access to all
        our premium articles and content.
      </p>
      <Link
        href="/"
        className="mt-8 flex items-center gap-2.5 rounded-lg bg-[#1a512d] px-6 py-3 font-medium text-white transition-all hover:bg-[#3a7e5c]"
      >
        <House size={20} />
        Return Home
      </Link>
    </div>
  );
}
