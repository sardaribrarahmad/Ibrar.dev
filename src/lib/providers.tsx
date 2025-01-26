
'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark" // Set default theme to dark
      enableSystem={false} // Disable system preference
    >
      {children}
    </ThemeProvider>
  );
}
