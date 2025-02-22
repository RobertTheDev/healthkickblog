import { Metadata } from 'next';
import SignInForm from './components/SignInForm';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default async function SignIn() {
  return <SignInForm />;
}
