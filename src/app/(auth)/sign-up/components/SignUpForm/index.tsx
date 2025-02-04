'use client';

import { createClient } from '@/app/utils/supabase/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpSchema, SignUpSchemaType } from './signUp.schema';

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmSignUp, setConfirmSignUp] = useState({
    active: false,
    email: '',
  });

  const onSubmit = async (formData: SignUpSchemaType) => {
    setIsLoading(true);
    setErrorMessage(null);

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    setIsLoading(false);

    if (error) {
      setErrorMessage(
        error.message || 'Something went wrong. Please try again.',
      );
      return;
    }

    setConfirmSignUp({ active: true, email: formData.email });
  };

  return (
    <div>
      {confirmSignUp.active ? (
        <div className="mx-auto w-full max-w-lg">
          <h1 className="mb-6 text-3xl font-bold text-black">
            Confirm Your Email Address
          </h1>
          <p>
            An email has been sent to {confirmSignUp.email}. Confirm your email
            to sign into your account.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-full max-w-lg"
        >
          <h1 className="mb-6 text-3xl font-bold text-black">Sign Up</h1>

          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-black"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              disabled={isLoading}
              {...register('email')}
              className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-1 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-[#1A512D]'
              }`}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input with Toggle */}
          <div className="relative mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-black"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                disabled={isLoading}
                {...register('password')}
                className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-1 ${
                  errors.password
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-[#1A512D]'
                }`}
                aria-invalid={errors.password ? 'true' : 'false'}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-600 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {errorMessage && (
            <p className="mb-6 text-sm text-red-600" aria-live="polite">
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-lg px-5 py-3 font-semibold text-white transition-all focus:ring-2 focus:ring-[#3a7e5c] focus:ring-offset-2 ${
              isLoading
                ? 'cursor-not-allowed bg-[#3a7e5c]'
                : 'bg-[#1a512d] hover:bg-[#3a7e5c]'
            }`}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-800">
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className="font-semibold text-[#1A512D] hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
