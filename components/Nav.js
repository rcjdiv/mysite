import navStyles from '../styles/Nav.module.css';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ReactDOM from 'react-dom';
import List from './List';

const Nav = () => {
  const router = useRouter();

  const toggleNavbar = (e) => {
    console.log(List);
    const responsiveNav = document.getElementById('respNav');
    if (responsiveNav.className !== navStyles.listContainer) {
      responsiveNav.className = navStyles.listContainer;
      ReactDOM.render(<List />, responsiveNav);
    } else {
      responsiveNav.className = '';
      ReactDOM.render('', responsiveNav);
    }
  };

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
      <div className={navStyles.nav} id="navBar">
        <nav className={navStyles.topNav}>
          <ul className={navStyles.listItems}>
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

        <div className={navStyles.icon} id="burger">
          <div className={navStyles.burgerToggle} onClick={toggleNavbar}>
            <div className={navStyles.burgerButton}></div>
            <div className={navStyles.burgerButton}></div>
            <div className={navStyles.burgerButton}></div>
          </div>
          <div id="respNav"></div>
        </div>
      </div>
    </>
  );
};

export default Nav;
