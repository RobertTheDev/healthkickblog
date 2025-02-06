import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ProgressBar from './layout/ProgressBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Healthkick`,
    default: `Healthkick | Delicious & Nutritious Healthy Recipes for Every Lifestyle`,
  },
  description:
    'Discover easy, wholesome, and delicious healthy food recipes with HealthKick. From plant-based meals to high-protein snacks, fuel your body with the best ingredients. Eat better, feel better.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ProgressBar />
          {children}
        </div>
      </body>
    </html>
  );
}
