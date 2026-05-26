'use client';

import { useRouter } from 'next/navigation';

export function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/sign-in');
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="cursor-pointer border-none text-cyan-700 transition-colors duration-200 hover:text-cyan-900"
      type="button"
    >
      Sign out
    </button>
  );
}
