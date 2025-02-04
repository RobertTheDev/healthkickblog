import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { createClient } from '../utils/supabase/server';

export default async function Layout({ children }: { children: ReactNode }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen justify-center bg-gray-50">
      <div className="relative hidden h-screen w-2/5 lg:block">
        <Image
          alt="A collection of vegetables"
          fill
          priority
          className="object-cover"
          src="/sign-in.jpg"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex h-20 items-center justify-center bg-[#1A512D] lg:h-28">
          <Link
            href="/"
            className="space flex items-center gap-2 text-center text-2xl font-bold tracking-wider text-white"
          >
            <div className="relative size-8">
              <Image fill alt="" className="object-cover" src="/logo.svg" />
            </div>
            healthkick
          </Link>
        </div>
        <main className="p-8 pt-12">{children}</main>
      </div>
    </div>
  );
}
