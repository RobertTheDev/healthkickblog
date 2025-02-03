import { Metadata } from 'next';
import AuthForm from './components/AuthForm';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default function SignIn() {
  return <AuthForm />;
}
