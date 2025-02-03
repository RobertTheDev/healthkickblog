'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  forgotPasswordSchema,
  ForgotPasswordSchemaType,
} from './forgotPassword.schema';

export default function ForgotPasswordForm({
  handleFormTypeChange,
}: {
  handleFormTypeChange: (newFormType: string) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ForgotPasswordSchemaType) => {
    setIsLoading(true);
    try {
      // Simulating form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-lg">
      <h1 className="mb-6 text-3xl font-bold text-black">Forgot Password</h1>

      {/* Email Input */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-bold text-black">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-1 ${
            errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-[#1A512D]'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* <p className="mb-6 text-sm text-red-600">rrors.password.message</p> */}

      <button
        type="submit"
        className={`w-full rounded-lg px-5 py-3 font-semibold text-white transition-all focus:ring-2 focus:ring-[#3a7e5c] focus:ring-offset-2 ${isLoading ? 'cursor-not-allowed bg-[#3a7e5c]' : 'bg-[#1a512d] hover:bg-[#3a7e5c]'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Sending Password Reset...' : 'Send Password Reset'}
      </button>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-800">
          Remember your password?{' '}
          <button
            onClick={() => handleFormTypeChange('signIn')}
            className="font-semibold text-[#1A512D] hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </form>
  );
}
