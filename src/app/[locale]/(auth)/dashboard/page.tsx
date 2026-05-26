import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dashboard',
};

type Props = { params: Promise<{ locale: string }> };

export default async function DashboardPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const cookieStore = await cookies();
  const userDataCookie = cookieStore.get('user_data')?.value;

  if (!userDataCookie) {
    redirect('/sign-in');
  }

  const user = JSON.parse(userDataCookie) as unknown as { id: string; name: string; email: string };
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
          {initials}
        </div>
        <div>
          <h1 className="text-xl font-bold text-cyan-900">
            Welcome back, {user.name.split(' ')[0]}
          </h1>
          <p className="text-sm text-cyan-700">Here&apos;s your account overview</p>
        </div>
      </div>

      <div className="rounded-xl border border-cyan-100 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xs font-semibold tracking-wider text-cyan-600 uppercase">
          Account details
        </h2>
        <dl className="space-y-3">
          <div className="flex items-center gap-4">
            <dt className="w-16 shrink-0 text-xs font-medium tracking-wide text-cyan-500 uppercase">
              Name
            </dt>
            <dd className="text-sm font-medium text-cyan-900">{user.name}</dd>
          </div>
          <div className="flex items-center gap-4">
            <dt className="w-16 shrink-0 text-xs font-medium tracking-wide text-cyan-500 uppercase">
              Email
            </dt>
            <dd className="text-sm text-cyan-900">{user.email}</dd>
          </div>
          <div className="flex items-center gap-4">
            <dt className="w-16 shrink-0 text-xs font-medium tracking-wide text-cyan-500 uppercase">
              ID
            </dt>
            <dd className="font-mono text-xs text-cyan-700">{user.id}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
