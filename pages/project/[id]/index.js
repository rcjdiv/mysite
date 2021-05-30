// import { useRouter } from 'next/router';
import Link from 'next/link';

const project = ({ project }) => {
  console.log(project);
  // for routing
  // const router = useRouter()
  // const {id} = router.query
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.body}</p>
      <br />
      <Link href="/">Go back</Link>
    </>
  );
};

// getStaticProps or getServerSideProps to generate all the data
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};

// static generated data is much faster and built it for real time and can be use to static websites
// have to use getStaticPaths when using getStaticProps. will return static path
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const projects = await res.json();

  const ids = projects.map((project) => project.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    // error handler
    // if the page doesnt exist the data will render 404 page
    fallback: false,
  };
};

export default project;
