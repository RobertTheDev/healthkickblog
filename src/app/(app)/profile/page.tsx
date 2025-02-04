import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile',
};

import CancelSubscriptionForm from './components/CancelSubscriptionForm';
import CloseAccountForm from './components/CloseAccountForm';
import UpdateNameForm from './components/UpdateNameForm';
import UpdatePasswordForm from './components/UpdatePasswordForm';
import VerifyEmailForm from './components/VerifyEmailForm';

export default function AccountPage() {
  return (
    <div className="w-full bg-gray-100">
      <h1 className="mt-6 text-center text-3xl font-bold">Account Settings</h1>
      <div className="mx-auto flex max-w-2xl flex-col p-8">
        <UpdateNameForm />
        <UpdatePasswordForm />
        <VerifyEmailForm />
        <CancelSubscriptionForm />
        <CloseAccountForm />
      </div>
    </div>
  );
}
