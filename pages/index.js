import Head from 'next/head';
import Projects from '../components/Project';
import Main from '../components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joanna</title>
        <meta name="keywords" content="portfolio, web development, next js" />
      </Head>
      <Main />
      {/* <Projects projects={projects} /> */}
    </div>
  );
}

// // the API fetch data
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );

//   const projects = await res.json();

//   return {
//     props: {
//       projects,
//     },
//   };
// };
