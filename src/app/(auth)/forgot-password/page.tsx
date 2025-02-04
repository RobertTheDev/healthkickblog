import { Metadata } from 'next';

import ForgotPasswordForm from './components/ForgotPasswordForm';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

export default async function SignIn() {
  return <ForgotPasswordForm />;
}
