import Link from 'next/link';

export default function SubscribeBanner() {
  return (
    <div className="fixed bottom-0 hidden h-64 w-full bg-white shadow-lg">
      <div className="flex items-start justify-between gap-4 p-8">
        <div className="aspect-square w-48">
          <img
            className="h-full w-full object-cover"
            src="https://assets.bonappetit.com/photos/667ae5f12379750c75f3b045/original/pass/BAEPI_SiteMeter_DT_375x250@2%20(1).gif?format=original"
          />
        </div>
        <div>
          <p className="text-4xl font-semibold">Ready for More?</p>
          <p className="font-medium">
            You’ve read your last free article. Start your free trial and get
            unlimited access—cancel anytime.
          </p>
        </div>
        <div>
          <Link
            href="/subscribe"
            className="rounded-full bg-black p-4 font-medium text-white"
          >
            Start free trial
          </Link>

          <p className="mt-8">
            Aleady a member?{' '}
            <Link className="underline" href="/sign-in">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
