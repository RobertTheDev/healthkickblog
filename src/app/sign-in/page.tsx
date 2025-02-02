import { Metadata } from 'next';
import ForgotPasswordForm from './components/ForgotPasswordForm';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default function SignIn() {
  return (
    <main className="flex min-h-screen justify-center bg-gray-50">
      <div className="h-screen w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://assets.bonappetit.com/photos/6362d382b83f24ee8287b0fa/3:4/width_1600/Bon-Appetit-Id-portal-Image.png"
        />
      </div>
      <div className="w-1/2">
        <ForgotPasswordForm />
      </div>
    </main>
  );
}
