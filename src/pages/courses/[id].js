import Head from "next/head";
import Link from "next/link";

function todo({ data }) {
  return (
    <>
      <Head>
        <title>Your Playground | Courses | {data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mt-12 mx-auto">
        <h1 className="text-3xl"> {data.title} </h1>
        <Link href="/courses">Back to Courses</Link>
      </main>
    </>
  );
}

Home.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const res = await axios
      .get(`/courses/${id}`)
      .then((response) => response.json())
      .then((json) => json);
    return { res };
  } catch (error) {
    return error;
  }
};

export default todo;
