'use client';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

export default function UpdatePasswordForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-6">
      <div className="text-xl font-semibold">Change Password</div>
      <div>
        <form className="flex flex-col gap-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password"
              className="w-full pr-12"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
