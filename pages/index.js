import Head from 'next/head';
import Main from '../components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joanna</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content="portfolio, web development, next js" />
      </Head>
      <Main />
    </div>
  );
}
