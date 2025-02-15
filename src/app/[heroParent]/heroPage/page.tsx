"use client"
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


const page = () => {
    useEffect(() => {
        document.title = "Params page";
    }, []);
    const route = useRouter()
    const params = useParams()
    const { paramsParent } = params
    return (
        <div>
            new page
            <p> this is your text -{paramsParent}</p>
            <div className='flex items-center justify-center gap-4'>
                <button onClick={() => route.push('tab-1')}> tab-1</button>
                <button onClick={() => route.push('tab-2')}> tab-2</button>
                <button onClick={() => route.push('tab-3')}> tab-3</button>
            </div>
            <div>
                <p className={`${paramsParent === 'tab-1' ? "block" : "hidden"}`}>first ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestias.</p>
                <p className={`${paramsParent === 'tab-2' ? "block" : "hidden"}`}>second ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestias.</p>
                <p className={`${paramsParent === 'tab-3' ? "block" : "hidden"}`}>third ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestias.</p>
            </div>
        </div>
    )
}

export default page
