'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const locale = String(params.locale ?? '');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as unknown as { message?: string };
        setError(data.message ?? 'Registration failed');
        return;
      }

      router.push(`/${locale}/dashboard`);
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-cyan-900">Create an account</h1>
        <p className="mt-1 text-sm text-cyan-700">Start your free account today</p>
      </div>

      <div className="rounded-xl border border-cyan-100 bg-white p-8 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-cyan-900">
              Full name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              placeholder="Jane Smith"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-cyan-900 transition-colors duration-200 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-cyan-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-cyan-900 transition-colors duration-200 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-cyan-900">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              minLength={8}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-cyan-900 transition-colors duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
            />
            <p className="mt-1.5 text-xs text-cyan-700">
              At least 8 characters with a letter and a number
            </p>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm font-medium text-cyan-900"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
              minLength={8}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-cyan-900 transition-colors duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-lg bg-green-500 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-cyan-700">
          Already have an account?{' '}
          <Link
            href={`/${locale}/sign-in`}
            className="font-semibold text-cyan-600 transition-colors duration-150 hover:text-cyan-700"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
