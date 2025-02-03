import Footer from '../layout/Footer';
import Header from '../layout/Header';
import SubscribeBanner from '../layout/SubscribeBanner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex flex-1 flex-col">{children}</div>
      <SubscribeBanner />
      <Footer />
    </div>
  );
}
