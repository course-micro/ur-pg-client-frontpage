import Head from "next/head";
import Link from "next/link";
import axios from "./configs/axios";

function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>Your Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> Saya Halaman Utama </h1>
        <Link href="/courses">
          Courses
        </Link>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const res = await axios.get("/courses")
    return {data : res.data};
  } catch (error) {
    return(error)
  }
};

export default Home;
