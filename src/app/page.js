"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    document.title = "Home page";
  }, []);
  return (
    <div>

      <h1>Basic routing</h1>
      <Link href="/edcsc">Go to params tabs</Link>
      <br />
      <br />
      <Link href="/heroPage">Go to hero page via link</Link>
      <br />
      <br />

      <Link href="/login">Go to login page via link</Link>
      <br />
      <button onClick={() => router.push("/login")}>Go to login page via button</button>


      <br />
      <br />

      <Link href="/about">Go to about page via link</Link>
      <br />
      <button onClick={() => router.push("/about")}>Go to about page via button</button>


      <br />
      <br />
    </div>
  );
}
