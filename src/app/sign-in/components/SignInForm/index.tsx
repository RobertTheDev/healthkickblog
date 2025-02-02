'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signInSchema, SignInSchemaType } from './signIn.schema';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInSchemaType) => {
    alert(JSON.stringify(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg"
    >
      <h1 className="mb-6 text-center text-2xl font-bold">Sign In</h1>

      {/* Email Input */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 ${
            errors.email
              ? 'border-red-600 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 ${
            errors.password
              ? 'border-red-600 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-all hover:bg-blue-700"
      >
        Sign In
      </button>
    </form>
  );
}
