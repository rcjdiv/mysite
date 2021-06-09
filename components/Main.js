import { useState } from 'react';
import mainStyles from '../styles/Main.module.css';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div className={mainStyles.mainDiv}>
      <h1 className={mainStyles.title}>
        Hi 👋🏻 I'm <br />
        <span>Joanna Marie Diaz</span>
      </h1>
      <div className={mainStyles.description}>
        <h2>and I'm a Web Developer</h2>
        <p>I created this portfolio using Next JS please leave a feedback 😉</p>
      </div>
      <div>
        <img className={mainStyles.me} src="/images/profile.jpg" alt="me" />
      </div>
      <Footer margin={165} />
    </div>
  );
};

export default Main;
