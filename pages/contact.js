import Link from 'next/link';
import contactStyles from '../styles/Contact.module.css';
import Footer from '../components/Footer';
import Form from '../components/ContactForm';

const contact = () => {
  return (
    <>
      <div className={contactStyles.contact}>
        <h1 className={contactStyles.contactTitle}>Contact Page</h1>

        <div className={contactStyles.mail}>
          <h3>My email address:</h3>
          <h4>&emsp; joannamarie838@gmail.com</h4>
          <h3>Phone no:</h3>
          <h4>&emsp; +81 8055023157</h4>
          <h3>My contact address</h3>
          <h4>&emsp; Nishi Koiwa, Edogawa-ku, Tokyo-to, Japan</h4>
        </div>
        <br />
        <hr className={contactStyles.hr} />
        <div className={contactStyles.feedback}>
          <h2>Please leave a feedback if you have time 😇</h2>
          <Form />
        </div>
        <br />

        <div
          className={contactStyles.back}
          style={{ color: 'rgb(248, 144, 47)' }}
        >
          <Link href="/">&larr; Main Page</Link>
        </div>
      </div>
      <Footer margin={60} />
    </>
  );
};

export default contact;
