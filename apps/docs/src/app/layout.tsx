import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Doc App',
  description: 'Welcome to Next.js 13',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
