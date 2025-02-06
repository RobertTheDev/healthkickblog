import { createClient } from '@/app/utils/supabase/server';
import { LucideCheckCircle, LucideUser, LucideUserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const categories = [
  { id: '1', slug: 'pasta', name: 'Pasta' },
  { id: '2', slug: 'rice', name: 'Rice' },
  { id: '3', slug: 'salads', name: 'Salads' },
  { id: '4', slug: 'soups', name: 'Soups' },
];

export default async function Header() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-[999] flex h-20 items-center justify-between bg-[#18492B] px-24 text-white shadow-md">
      {/* Logo and Navigation */}
      <div className="flex items-center justify-between gap-8">
        {/* Desktop Navigation */}
        <nav className="hidden gap-10 md:flex">
          {categories.map((link) => (
            <Link
              key={link.id}
              className="text-base font-semibold transition-colors hover:text-orange-400"
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
          className="space flex items-center gap-2 text-center text-2xl font-bold tracking-wider"
        >
          <div className="relative size-8">
            <Image fill alt="" className="object-cover" src="/logo.svg" />
          </div>
          healthkick
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-10">
        {user ? (
          <Link href="/profile">
            <button className="rounded-ful flex items-center gap-2 text-base font-semibold">
              <LucideUser size={20} />
              Account
            </button>
          </Link>
        ) : (
          <Link href="/sign-in">
            <button className="flex items-center gap-2 rounded-full text-base font-semibold">
              <LucideUserPlus size={20} /> Sign In
            </button>
          </Link>
        )}
        <Link
          href="/subscribe"
          className="flex items-center gap-3 rounded-full bg-[#F97315] px-6 py-3 text-base font-semibold"
        >
          <LucideCheckCircle size={20} /> Subscribe
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
