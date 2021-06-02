import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.css';

const List = () => {
  const router = useRouter();

  return (
    <>
      <ul className={navStyles.resListItems}>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default List;
