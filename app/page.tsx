import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <h1>Welcome to our site ch</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
