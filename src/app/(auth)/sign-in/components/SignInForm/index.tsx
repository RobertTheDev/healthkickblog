'use client';

import { createClient } from '@/app/utils/supabase/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInSchema, SignInSchemaType } from './signIn.schema';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  const onSubmit = async (formData: SignInSchemaType) => {
    setIsLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
      return;
    }

    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-lg">
      <h1 className="mb-6 text-3xl font-bold text-black">Sign In</h1>

      {/* Email Input */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-bold text-black">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
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

      {/* Password Input with Toggle */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-bold text-black"
          >
            Password
          </label>
          <Link
            type="button"
            href="/forgot-password"
            className="text-sm font-semibold text-[#1A512D] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="relative mt-2">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            aria-invalid={errors.password ? 'true' : 'false'}
            className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-1 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-[#1A512D]'
            }`}
          />
          <button
            type="button"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-3 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {errorMessage && (
        <p aria-live="polite" className="mb-6 text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full rounded-lg px-5 py-3 font-semibold text-white transition-all focus:ring-2 focus:ring-[#3a7e5c] focus:ring-offset-2 ${isLoading ? 'cursor-not-allowed bg-[#3a7e5c]' : 'bg-[#1a512d] hover:bg-[#3a7e5c]'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-800">
          Don&apos;t have an account?{' '}
          <Link
            href="/sign-up"
            className="font-semibold text-[#1A512D] hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}
