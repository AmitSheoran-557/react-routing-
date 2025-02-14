"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Basic routing</h1>

      <br />
      <br />

      <Link href="/login">Go to login page via link</Link>

      <br />
      <br />

      <Link href="/about">Go to about page via link</Link>

      <br />
      <br />

      <button onClick={() => router.push("/login")}>Go to login page via button</button>

      <br />
      <br />
      <button onClick={() => router.push("/about")}>Go to about page via button</button>
    </div>
  );
}
