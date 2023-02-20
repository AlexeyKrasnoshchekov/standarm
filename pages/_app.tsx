import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="АРМАТУРА, Задвижки клиновые, Задвижки шиберные, Затворы дисковые, Краны шаровые, Автоматизация арматуры" />
        <title>
          Стандарм - трубопроводная арматура и средства автоматизации
        </title>
        <meta name="description" content="трубопроводная арматура и средства автоматизации" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
