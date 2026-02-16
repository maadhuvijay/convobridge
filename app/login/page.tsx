'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BackgroundEffects from '../components/BackgroundEffects';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentName: '',
    studentNumber: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle login logic
    console.log('Login:', formData);
    router.push('/chat');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8">
      <BackgroundEffects />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/welcome"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            ← Back
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full border border-[var(--border-orange)] bg-[var(--panel-bg)] text-[var(--text-primary)] hover:bg-[var(--orange-glow)] transition-all duration-300 text-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* Login Form */}
        <div className="rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-orange)] p-8 shadow-[0_0_30px_var(--orange-glow)]">
          <h1 className="text-3xl font-bold tracking-wide uppercase text-[var(--text-primary)] mb-2">
            Login
          </h1>
          <p className="text-[var(--text-muted)] mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Name */}
            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Student Name
              </label>
              <input
                type="text"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--panel-bg)] border border-[var(--border-orange)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--orange-500)] focus:shadow-[0_0_10px_var(--orange-glow)] transition-all"
                placeholder="Enter your student name"
              />
            </div>

            {/* Student Number */}
            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Student #
              </label>
              <input
                type="text"
                value={formData.studentNumber}
                onChange={(e) => setFormData({ ...formData, studentNumber: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--panel-bg)] border border-[var(--border-orange)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--orange-500)] focus:shadow-[0_0_10px_var(--orange-glow)] transition-all"
                placeholder="Enter your student number"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--orange-500)] to-[var(--orange-600)] text-white font-semibold hover:shadow-[0_0_20px_var(--orange-glow)] transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
