"use client"
import React, { useState } from 'react'
import { urlFor } from '../lib/sanity'

interface imagesI {
    images: any
}

function ImageGallery({images} : imagesI) {

  const [bigImage, setbigImage] = useState(images[0])

  function handleImgeClick(image:any) {
    setbigImage(image)
  }

  return (
    <div className='w-[400px]'>
      <div className='flex flex-col w-full gap-3'>
        <div className='relative rounded-lg bg-gray-200 hover:bg-red-600 transition-all'>
          <img src={urlFor(bigImage).url()} alt="" className='w-full' />
          <div className='absolute top-0 left-0 p-1 text-white rounded-br-lg rounded-tl-lg bg-red-600 px-2 '>SALE</div>
        </div>
        <div className='flex flex-row gap-2'>
        {images.map((image: any, idx: any)=> (
            <div key={idx} className='bg-gray-200 rounded-md hover:bg-red-600 transition-all'>
                <img 
                    src={urlFor(image).url()} 
                    alt="Product Photo" 
                    className='w-44'
                    onClick={()=>handleImgeClick(image)} 
                    />
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery