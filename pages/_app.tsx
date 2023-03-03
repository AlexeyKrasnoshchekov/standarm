import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') {
    ym('hit', url);
  }
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="АРМАТУРА, Задвижки клиновые, Задвижки шиберные, Затворы дисковые, Краны шаровые, Автоматизация арматуры"
        />
        <title>
          Стандарм - трубопроводная арматура и средства автоматизации
        </title>
        <meta
          name="description"
          content="трубопроводная арматура и средства автоматизации"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
      </Head>
      <YMInitializer
        accounts={[46087329]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  );
}
