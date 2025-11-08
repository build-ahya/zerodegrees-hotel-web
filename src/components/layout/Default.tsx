'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import { Roboto } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';
import cn from '@/utils/cn';
import StoreProvider from '@/store/StoreProvider';
import constants from '@/constants';
import PublicLayout from './public';
import PrivateLayout from './private';
import AuthLayout from './auth';

const roboto = Roboto({
  variable: '--roboto-font',
  weight: ['100', '300', '400', '500', '700', '900'],
  fallback: ['Helvetica', 'sans-serif'],
  subsets: ['latin'],
});

function Layout({
  type,
  children,
}: {
  type: 'auth' | 'public' | 'dashboard';
  children: React.ReactNode;
}) {
  switch (type) {
    case 'dashboard':
      return <PrivateLayout>{children}</PrivateLayout>;
    case 'auth':
      return <AuthLayout>{children}</AuthLayout>;
    default:
      return <PublicLayout>{children}</PublicLayout>;
  }
}

function App({ children }: Readonly<{ children: React.ReactNode }>) {
  //   const { initializing } = useAuth();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  //   if (initializing || typeof window === 'undefined') {
  //     return null;
  //   }

  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Layout type='public'>{children}</Layout>
      <Toaster position='bottom-center' toastOptions={constants.toastOptions} />
    </SWRConfig>
  );
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn('light', roboto.variable)}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>
  );
}
