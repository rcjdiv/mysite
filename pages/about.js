import Link from 'next/link';
import Head from 'next/head';
import aboutStyles from '../styles/About.module.css';
import Footer from '../components/Footer';

const about = () => {
  return (
    <>
      <div className={aboutStyles.about}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>About</title>
        </Head>

        <h1 className={aboutStyles.aboutTitle}>About Page</h1>
        <hr />
        <section className="intro">
          <h4>Hello, I'm Joanna.</h4>
          <p>
            &emsp;I love reading books and listening to music. And since I
            started to dig deep into coding, it became my passion. I started to
            keep on learning and building projects without taking notes of the
            time.
          </p>
          <p>
            &emsp;I graduated of{' '}
            <span className={aboutStyles.course}>
              Bachelor of Science in Computer Engineering{' '}
            </span>
            at a province in the Philippines. Though I major on computer, our
            curiculum mostly focus on the hardware and troubleshooting part and
            barely study beyond the basics of some programming language. And
            since I graduated, I started to work on a field that is in demand on
            my place. And that is Production Engineering. Below are my past
            experience as a Production Engineer. &darr;
          </p>
        </section>
        <div>
          <section className="experience">
            <ul>
              <li>
                <h3>Failure Analyst Engineer</h3>
                <h5>◇ Wistron Infocom Philippines - 2 years</h5>
              </li>
              <li>
                <h3>Quality Assurance Engineer</h3>
                <h5>◇ Nidec Subic Corporation Philippines - 1 year</h5>
              </li>
              <li>
                <h3>Quality Assurance Engineer</h3>
                <h5>◇ Taiyo Yuuden Japan - 4 years</h5>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section className="afterword">
            <br />
            <p>
              &emsp; Changing career from hardware to software is a tough one.
              But by having knowledge on some programming language like Visual
              Basic, Java, C++ and Python learning JavaScript syntax and
              algorithm become familiar for me.
            </p>
            <p>
              I enjoy coding and learning Javascript and some of it's framework
              and libraries like:
            </p>
            <ul>
              <li>JQuery</li>
              <li>React JS</li>
              <li>Lodash</li>
              <li>Bootstrap</li>
              <li>Node JS</li>
              <li>Next JS</li>
            </ul>
            <p>And there are still a lot to learn.</p>
            <p>I also learned about some SQL and NoSQL database like:</p>
            <ul>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Netlify</li>
              <li>heroku</li>
            </ul>
            <p>
              I actually deploy some of my projects on this database. Please
              take a look at some of the projects that I build on the <br />
              {
                <Link href="/projects" className={aboutStyles.changePage}>
                  next page &rarr;
                </Link>
              }
            </p>
          </section>
        </div>
        <div
          className={aboutStyles.back}
          style={{ color: 'var(--dark-orange)' }}
        >
          <Link href="/">&larr; Main Page</Link>
        </div>
      </div>
      <Footer margin={80} />
    </>
  );
};

export default about;
