import Head from "next/head";
import Link from "next/link";

function index({props}) {
  return (
    <>
      <Head>
        <title>Your Playground | Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mt-12 mx-auto">
        <h1 className="text-6xl">Courses</h1>
        <ul>
        {
            props.map((course) => {
                return <li key={course.id} className="border border-indigo-800 p-4">
                    {course?.title ?? "No Title"}
                    <Link href="/random/[id]" as={`/courses/${course.id}`}>
                        Go
                    </Link>
                </li>
        })
        }
        </ul>
      </main>
    </>
  );
}

index.getInitalProps = async () => {
  try {
    const res = await axios.get("/courses");
    return { data: res.data };
  } catch (error) {
    return error;
  }
};

export default index;
