import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="application-name" content="Zack Jackson" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Personal website for Zack Jackson front End Web Developer"
        />
        <title>Zack Jackson | Front End Developer</title>
      </Head>

      <div
        id="app"
        className="relative flex flex-col min-h-screen overflow-hidden"
      >
        <AppHeader />
        <main id="main" className="flex flex-col grow">
          <Component {...pageProps} />
        </main>
        <AppFooter />
      </div>
    </>
  );
}

export default MyApp;
