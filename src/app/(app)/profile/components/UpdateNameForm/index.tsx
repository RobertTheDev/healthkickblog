'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UpdateNameSchemaType, updateNameSchema } from './updateName.schema';

export default function UpdateNameForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateNameSchemaType>({
    resolver: zodResolver(updateNameSchema),
  });

  const onSubmit = async (data: UpdateNameSchemaType) => {
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
        <div className="mb-6 text-xl font-bold">Update Name</div>
        <div>
          <div className="relative mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-black"
            >
              Name
            </label>
            <div className="relative">
              <input
                id="name"
                type={'text'}
                {...register('name')}
                className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-1 ${
                  errors.name
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-[#1A512D]'
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full rounded-lg px-5 py-3 font-semibold text-white transition-all focus:ring-2 focus:ring-black focus:ring-offset-2 ${isLoading ? 'cursor-not-allowed bg-black' : 'bg-black hover:bg-gray-700'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Updating Name...' : 'Update Name'}
          </button>
        </div>
      </form>
    </div>
  );
}
