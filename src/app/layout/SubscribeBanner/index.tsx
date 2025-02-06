import Link from 'next/link';

export default function SubscribeBanner() {
  return (
    <div className="fixed bottom-0 z-[999999999] hidden w-full border-t border-t-gray-200 bg-white shadow-xl">
      <div className="flex flex-col items-center justify-center p-8 lg:items-center">
        <div className="flex flex-col items-center">
          <h4 className="text-center text-3xl font-semibold">
            Ready for More?
          </h4>
          <div className="mt-6 aspect-square w-32 overflow-hidden rounded-full">
            <img className="h-full w-full object-cover" src="/banner.jpg" />
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
          <p className="mt-2 text-center text-base font-medium">
            Subscribe and gain access to exclusive recipes, cooking tips, and
            more!
          </p>
          <Link
            href="/subscribe"
            className="mt-4 flex w-full max-w-64 items-center justify-center rounded-full bg-[#1a512d] px-6 py-4 text-sm font-semibold text-white"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}
