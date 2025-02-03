'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  resetPasswordSchema,
  ResetPasswordSchemaType,
} from './resetPassword.schema';

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordSchemaType) => {
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
      <h1 className="mb-6 text-3xl font-bold text-black">
        Reset Your Password
      </h1>

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
            {...register('password')}
            className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-1 ${
              errors.password
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-[#1A512D]'
            }`}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* <p className="mb-6 text-sm text-red-600">rrors.password.message</p> */}

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full rounded-lg px-5 py-3 font-semibold text-white transition-all focus:ring-2 focus:ring-[#3a7e5c] focus:ring-offset-2 ${isLoading ? 'cursor-not-allowed bg-[#3a7e5c]' : 'bg-[#1a512d] hover:bg-[#3a7e5c]'}`}
        disabled={isLoading}
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
