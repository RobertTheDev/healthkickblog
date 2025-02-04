import { categories } from '@/app/data/categories';
import { createClient } from '@/app/utils/supabase/server';
import { LucideCheckCircle, LucideUser, LucideUserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-[999] flex h-20 items-center justify-between bg-[#173C24] px-8 shadow-md">
      {/* Logo and Navigation */}
      <div className="flex items-center justify-between gap-8">
        {/* Desktop Navigation */}
        <nav className="hidden gap-12 md:flex">
          {categories.map((link) => (
            <Link
              key={link.id}
              className="text-base font-medium text-white transition-colors hover:text-orange-400"
              href={`/categories/${link.slug}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Logo */}
      <div className="flex flex-1 items-center justify-center">
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

      {/* Action Buttons */}
      <div className="flex gap-4">
        {user ? (
          <Link href="/profile">
            <button className="flex items-center gap-2 rounded-full bg-[#2F503B] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1A512D]">
              <LucideUser size={20} />
              Account
            </button>
          </Link>
        ) : (
          <Link href="/sign-in">
            <button className="flex items-center gap-2 rounded-full bg-[#2F503B] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1A512D]">
              <LucideUserPlus size={20} /> Sign In
            </button>
          </Link>
        )}
        <Link href="/subscribe">
          <button className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-orange-600">
            <LucideCheckCircle size={20} /> Subscribe
          </button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <nav className="bg-[#173C24] px-6 py-3 md:hidden">
        <div className="flex flex-wrap gap-4">
          {categories.map((link) => (
            <Link
              key={link.id}
              className="block text-sm font-medium text-white transition-colors hover:text-orange-400"
              href={`/recipes/${link.slug}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
