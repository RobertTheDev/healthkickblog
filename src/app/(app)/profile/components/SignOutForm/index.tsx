import { createClient } from '@/app/utils/supabase/server';
import { redirect } from 'next/navigation';

export default function SignOutForm() {
  const handleSignOut = async () => {
    'use server';
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      redirect('/error');
    }

    redirect('/');
  };

  return (
    <div className="mb-6 rounded-xl bg-white p-8 shadow-md">
      <div className="text-xl font-bold">Sign Out</div>
      <div>
        <button
          onClick={handleSignOut}
          className={`mt-6 w-full rounded-lg bg-black px-5 py-3 font-semibold text-white transition-all hover:bg-gray-700 focus:ring-2 focus:ring-black focus:ring-offset-2`}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
