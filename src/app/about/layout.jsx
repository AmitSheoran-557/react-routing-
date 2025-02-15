"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const layout = ({ children }) => {
    const pathName = usePathname()

    return (
        <div>
            {
                pathName !== "/about/aboutTwo/aboutCollege" ?
                    <>
                        <h2 className='text-3xl font-bold mb-3'>This is common about content</h2>
                    </>
                    : <p className='text-3xl font-bold mb-3'> "you hide common content for this section"</p>
            }
            {
                children
            }
        </div>
    )
}

export default layout
