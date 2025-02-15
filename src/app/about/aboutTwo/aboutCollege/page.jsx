"use client"
import React, { useEffect } from 'react'

const page = () => {
    useEffect(() => {
        document.title = "About college"
    }, []);
    return (
        <div>
            This is about college page
        </div>
    )
}

export default page
