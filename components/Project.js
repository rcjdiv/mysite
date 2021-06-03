import projectStyles from '../styles/Project.module.css';
import projectData from '../public/project.json';

const Project = () => {
  const data = Object.values(projectData);
  const mapData = data.map((el, i) => {
    return (
      <div key={i} className={projectStyles.divider}>
        <div className={projectStyles.card}>
          <h2>{el.name}</h2>
          <div className={projectStyles.image}>
            <img src={el.image} alt={el.name} />
          </div>
        </div>

        <div className={projectStyles.details}>
          <ul>
            {el.description.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
        <div className={projectStyles.preview}>
          <a href={el.URL} target="_blank">
            <h3>Preview</h3>
          </a>
          <a href={el.github} target="_blank">
            <p>Github Source Code</p>
          </a>
        </div>
      </div>
    );
  });

  return <div className={projectStyles.project}>{mapData}</div>;
};

export default Project;
