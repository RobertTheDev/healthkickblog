import { Metadata } from 'next';
import SignUpForm from './components/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default async function SignIn() {
  return <SignUpForm />;
}
