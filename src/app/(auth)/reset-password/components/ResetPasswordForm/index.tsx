'use client';

import { createClient } from '@/app/utils/supabase/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  resetPasswordSchema,
  ResetPasswordSchemaType,
} from './resetPassword.schema';

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  useEffect(() => {
    if (!window.location.search.includes('code')) {
      setErrorMessage('Invalid or missing reset token.');
    }
  }, []);

  const handleTogglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const onSubmit = async (formData: ResetPasswordSchemaType) => {
    setIsLoading(true);
    setErrorMessage(null);

    const supabase = createClient();

    const { error } = await supabase.auth.updateUser({
      password: formData.password,
    });

    setIsLoading(false);

    if (error) {
      setErrorMessage(
        error.message || 'Something went wrong. Please try again.',
      );
      return;
    }

    router.push('/sign-in');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-lg">
      <h1 className="mb-6 text-3xl font-bold text-black">
        Reset Your Password
      </h1>

      {/* Password Input */}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-bold text-black"
        >
          New Password
        </label>
        <div className="relative mt-2">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            className={`w-full rounded-lg border px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-1 ${
              errors.password
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-[#1A512D]'
            }`}
          />
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-600 focus:outline-none"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {errorMessage && (
        <p className="mb-6 text-sm text-red-600">{errorMessage}</p>
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
        {isLoading ? 'Resetting Password...' : 'Reset Password'}
      </button>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-800">
          Remember your password?{' '}
          <Link
            href="/sign-in"
            className="font-semibold text-[#1A512D] hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}
