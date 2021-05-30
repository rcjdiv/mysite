import navStyles from '../styles/Nav.module.css';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
          rel="stylesheet"
        />
      </Head>
      {router.pathname !== '/' ? (
        <Link href="/">
          <div className={navStyles.name}>
            <h1>Joanna</h1>
          </div>
        </Link>
      ) : (
        ''
      )}

      <nav className={navStyles.nav}>
        <ul>
          <li
            className={
              router.pathname === '/about' ? `${navStyles.active}` : ''
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              router.pathname === '/projects' ? `${navStyles.active}` : ''
            }
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={
              router.pathname === '/contact' ? `${navStyles.active}` : ''
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
