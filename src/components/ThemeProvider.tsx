'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider(props: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {props.children}
    </NextThemesProvider>
  );
}
