import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Doc App',
  description: 'Welcome to Next.js 13',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body>
        <main className='container flex min-h-[70vh] w-full flex-col p-4'>
          {children}
        </main>
      </body>
    </html>
  );
}
