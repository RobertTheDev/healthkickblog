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
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Account Settings</h1>
      <div className="flex flex-col">
        <UpdateNameForm />
        <UpdatePasswordForm />
        <VerifyEmailForm />
        <CloseAccountForm />
        <CancelSubscriptionForm />
      </div>
    </div>
  );
}
