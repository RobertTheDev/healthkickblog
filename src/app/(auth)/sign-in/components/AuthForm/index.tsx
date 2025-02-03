'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import ForgotPasswordForm from '../ForgotPasswordForm';
import ResetPasswordForm from '../ResetPasswordForm';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';

export default function AuthForm() {
  const [formType, setFormType] = useState('signIn');

  function handleFormTypeChange(newFormType: string) {
    setFormType(newFormType);
  }

  const searchParams = useSearchParams();

  const resetPassword = searchParams.get('reset-code');

  if (resetPassword !== null) {
    return (
      <div>
        <ResetPasswordForm />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-start">
      {formType === 'signUp' && (
        <SignUpForm handleFormTypeChange={handleFormTypeChange} />
      )}
      {formType === 'signIn' && (
        <SignInForm handleFormTypeChange={handleFormTypeChange} />
      )}
      {formType === 'forgotPassword' && (
        <ForgotPasswordForm handleFormTypeChange={handleFormTypeChange} />
      )}
    </div>
  );
}
