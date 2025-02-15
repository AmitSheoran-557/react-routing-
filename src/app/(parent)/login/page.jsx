"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
  useEffect(() => {
    document.title = "Login page";
}, []);
  const [images, setImage] = useState([])

  const handlefiles = (e) => {
    const files = e.target.files; 
    const fileArr = [];

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        fileArr.push({
          url: URL.createObjectURL(file),
        })
      }
      else {
        alert('select valid image')
      }
    })
    setImage((prevImg) => [...prevImg, ...fileArr])
  }
  return (
    <div>
      This is login page
      <br />
      <br />
      <p className='mb-4'>you can upload image</p>
      <br />

      <label htmlFor="image" className='bg-black px-3 py-1 text-white rounded-md mt-4'>upload</label>
      <input onChange={handlefiles} type="file" id="image" className='hidden' />
      <div>
        {images.map((item, i) => (
          <img key={i} src={item.url} alt={`slected-img-${i}`} />
        ))}
      </div>
    </div>
  )
}

export default page
