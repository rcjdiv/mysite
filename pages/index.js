import Head from 'next/head';
import Main from '../components/Main';
import dynamic from 'next/dynamic';

const Home = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-FV187K8D0L');
  }

  return (
    <div>
      <Head>
        <title>Joanna</title>

        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content="portfolio, web development, next js" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FV187K8D0L"
        ></script>
      </Head>
      <Main />
    </div>
  );
};

export default Home;
