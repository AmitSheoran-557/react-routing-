"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Page = () => {
  useEffect(() => {
    document.title = "About one";
  }, []);
  return (
    <div>
      This is About one page
      <br />
      <br />
      <Link className='bg-black px-3 py-1 text-white rounded-md mt-10' href='/about/aboutTwo'>
        Go to About Two page via link
      </Link>

    </div>
  )
}

export default Page
