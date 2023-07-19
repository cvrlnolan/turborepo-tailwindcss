import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { ModeToggle, ThemeProvider } from 'ui';

export const metadata: Metadata = {
  title: 'Web App',
  description: 'Welcome to Next.js 13',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className='flex min-h-[70vh] w-full flex-col overflow-hidden p-4 md:container'>
            <div className='flex w-full justify-end'>
              <ModeToggle />
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
