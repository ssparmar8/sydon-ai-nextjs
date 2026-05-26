import { AppConfig } from '@/utils/AppConfig';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="min-h-screen bg-cyan-50 antialiased">
    <div className="mx-auto max-w-5xl px-4">
      <header className="border-b border-cyan-100">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <span className="text-lg font-bold text-cyan-700">{AppConfig.name}</span>
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-sm font-medium">{props.leftNav}</ul>
            </nav>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-x-5 text-sm font-medium">{props.rightNav}</ul>
          </nav>
        </div>
      </header>

      <main className="py-8">{props.children}</main>
    </div>
  </div>
);
