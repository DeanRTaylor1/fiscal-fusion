import MainLayout from '@/core/components/layouts/MainLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

interface MyAppProps extends AppProps {
  pageProps: {
    session: Session;
  };
}

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
}
