import projectStyles from '../styles/Project.module.css';
import Link from 'next/link';

const ProjectList = ({ project }) => {
  console.log(project.id);
  return (
    <Link href="/project/[id]" as={`/project/${project.id}`}>
      <a className={projectStyles.card}>
        <h3>{project.title} &rarr;</h3>
        <p>{project.body}</p>
      </a>
    </Link>
  );
};

export default ProjectList;
