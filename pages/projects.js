import Link from 'next/link';
import projectStyles from '../styles/Project.module.css';
import Project from '../components/Project';
import Footer from '../components/Footer';

const projects = () => {
  return (
    <div className={projectStyles.grid}>
      <h1 className={projectStyles.projectTitle}>Projects Page</h1>
      <div className={projectStyles.start}>
        <Project />
      </div>

      <div
        className={projectStyles.back}
        style={{ color: 'rgb(248, 144, 47)' }}
      >
        <Link href="/">&larr; Main Page</Link>
      </div>
      <Footer margin={80} />
    </div>
  );
};

export default projects;
