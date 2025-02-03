import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gray-100 px-8">
      <h1 className="mt-12 text-9xl font-bold text-[#1a512d]">404</h1>
      <h2 className="mt-8 text-2xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-3 text-center text-gray-700">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-[#1a512d] px-6 py-3 font-medium text-white transition-all hover:bg-[#3a7e5c]"
      >
        Return Home
      </Link>
    </main>
  );
}
