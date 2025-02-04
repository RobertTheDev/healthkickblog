import { Metadata } from 'next';

import ResetPasswordForm from './components/ResetPasswordForm';

export const metadata: Metadata = {
  title: 'Reset Password',
};

export default async function ResetPassword() {
  return <ResetPasswordForm />;
}
