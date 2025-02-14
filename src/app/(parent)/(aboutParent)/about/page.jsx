import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      About page
      <br />
      <br />
      <Link className='bg-black px-3 py-1 text-white rounded-md mt-10' href={{ pathname: "/aboutTwo", query: { id: "123", name: "John Doe" } }}>
        Go to About Two page via link
      </Link>
    </div>
  )
}

export default Page
