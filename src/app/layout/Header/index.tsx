import Link from 'next/link';

const headerLinks = [
  {
    id: '1',
    slug: '/',
    name: 'Home',
  },
  {
    id: '2',
    slug: '/',
    name: 'Home',
  },
  {
    id: '3',
    slug: '/',
    name: 'Home',
  },
  {
    id: '4',
    slug: '/',
    name: 'Home',
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 h-16 bg-[#173C24]">
      <div className="flex min-h-full items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <div>
            <Link className="text-xl font-semibold text-white" href="/">
              Healthkick
            </Link>
          </div>
          {headerLinks.map((link) => {
            return (
              <div key={link.id}>
                <Link
                  className="text-sm font-medium text-white"
                  href={link.slug}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4">
          <Link href="/sign-in" className="rounded-full bg-orange-500 p-4">
            Sign In
          </Link>
          <Link href="/subscribe" className="rounded-full bg-orange-500 p-4">
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}
