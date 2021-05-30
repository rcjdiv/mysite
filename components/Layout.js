import Nav from './Nav';
// import Footer from './Footer';
import style from '../styles/Layout.module.css';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Texturina:wght@300&family=Ubuntu:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
