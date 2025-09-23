import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page changes</title>
      </Head>
      <h1>Welcome to our site</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
