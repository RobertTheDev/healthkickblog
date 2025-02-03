import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen justify-center bg-gray-50">
      <div className="relative hidden h-screen w-2/5 lg:block">
        <Image
          alt="A collection of vegetables"
          fill
          className="object-cover"
          src="/vegetables.jpg"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex h-20 items-center justify-center bg-[#1A512D] lg:h-28">
          <Link href="/" className="text-2xl font-semibold text-white">
            Healthkick
          </Link>
        </div>
        <main className="p-8 pt-12">{children}</main>
      </div>
    </div>
  );
}
