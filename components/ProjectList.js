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

// "Project3": {
//   "name": "Forkify",
//   "URL": "https://forkify-app-joanna.netlify.app",
//   "description": [
//     "Vanilla JS",
//     "Uses Sass library",
//     "Uses Object Oriented Programming",
//     "Fetching data from API using Async function",
//     "Implemented MVC architecture"
//   ],
//   "image": "/forkify.png",
//   "github": "https://github.com/JoannaMarieDiaz/Forkify.git"
// },
// "Project4": {
//   "name": "Yelp Camp",
//   "URL": "https://yelp-camp-joanna.herokuapp.com/",
//   "description": [
//     "Uses MongoDB and Mongoose and Passport",
//     "Uses Express",
//     "Uses Joi Middleware for Express Validation",
//     "Connect to Mapbox API for Geolocation"
//   ],
//   "image": "/images/yelpcamp.png",
//   "github": "https://github.com/JoannaMarieDiaz/YelpCamp"
// // },
// "Project7": {
//   "name": "Burger App",
//   "URL": "https://temp-page-joanna.netlify.app/",
//   "description": [
//     "Uses React Framework",
//     "Uses Redux library",
//     "Deploy with Next JS"
//   ],
//   "image": "/images/budgetApp.png",
//   "github": "https://github.com/JoannaMarieDiaz/burger-builder"
// }
