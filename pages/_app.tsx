import { MouseEvent, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Globals } from '@react-spring/web';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import Link from 'next/link';
import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';
import useReducedMotion from 'hooks/useReducedMotion';
import 'styles/index.css';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  const prefersReducedMotion: boolean = useReducedMotion();

  useEffect(() => {
    Globals.assign({
      skipAnimation: prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="application-name" content="Zack Jackson" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Personal website for Zack Jackson Front-End Developer"
        />
        <title>Zack Jackson | Front-End Developer</title>
      </Head>

      <div
        id="app"
        className="relative flex flex-col min-h-screen overflow-hidden"
      >
        <Link href="#main">
          <a
            className="skip-link"
            onClick={(e: MouseEvent): void =>
              (e.currentTarget as HTMLElement).blur()
            }
          >
            Skip to Content
          </a>
        </Link>
        <AppHeader />
        <QueryClientProvider client={queryClient}>
          <main id="main" className="flex flex-col items-center grow">
            <Component {...pageProps} />
          </main>
        </QueryClientProvider>
        <AppFooter />
      </div>
    </>
  );
}

export default App;
