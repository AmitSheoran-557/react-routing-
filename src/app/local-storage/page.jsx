'use client'
import React, { useEffect, useState } from 'react'


const page = () => {
    const [input, setInput] = useState('')
    const [result, setResult] = useState([])


    useEffect(() => {
        const storedResult = (localStorage.getItem('result'))
        if (storedResult) {
            setResult(JSON.parse(storedResult))
        }
    }, [])

    const handler = (e) => {
        if (input !== '') {
            e.preventDefault()
            const newResult = [...result, input];
            localStorage.setItem('result', JSON.stringify(newResult))
            setResult(newResult)
            setInput('')
        }
    }
    const clear = () => {
        localStorage.clear()
        setResult([])
    }

    return (
        <div>
            <div>
                <form action="">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='border-black border-2' />
                    <button onClick={handler}>save</button>
                    {
                        result.map((item, index) => (
                            <div key={index} className="flex-col gap-4">
                                <ul>
                                    <li>{item}</li>
                                </ul>
                            </div>
                        ))
                    }
                </form>
            </div>
            <button className='bg-black px-3 py-1 text-white rounded-md' onClick={clear}>clear</button>
        </div>
    )
}

export default page
