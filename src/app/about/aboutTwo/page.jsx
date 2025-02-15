"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const AboutTwo = () => {
  useEffect(() => {
    document.title = "About two";
}, []);

  return (
    <div>
      <h1>About Two Page</h1>
      <br />
      <br />
      <Link className='bg-black px-3 py-1 text-white rounded-md mt-10' href='/about/aboutTwo/aboutCollege'>
        Go to About college page via link
      </Link>
    </div>
  )
}

export default AboutTwo
