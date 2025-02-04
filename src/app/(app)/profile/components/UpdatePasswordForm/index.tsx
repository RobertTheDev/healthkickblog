'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  updatePasswordSchema,
  UpdatePasswordSchemaType,
} from './updatePassword.schema';

export default function UpdatePasswordForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordSchemaType>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit = async (data: UpdatePasswordSchemaType) => {
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
    <div className="mb-6 rounded-xl bg-white p-8 shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-lg"
      >
        <div className="mb-6 text-xl font-bold">Update Password</div>
        <div>
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
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full rounded-lg px-5 py-3 font-semibold text-white transition-all focus:ring-2 focus:ring-black focus:ring-offset-2 ${isLoading ? 'cursor-not-allowed bg-black' : 'bg-black hover:bg-gray-700'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Updating Password...' : 'Update Password'}
          </button>
        </div>
      </form>
    </div>
  );
}
