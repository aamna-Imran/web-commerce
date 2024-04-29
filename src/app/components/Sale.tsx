import React from 'react'
import { client } from '../lib/sanity'
import { Button } from '@/components/ui/button';

async function getSaledata() {
    const query =`*[_type == "saleBanner" ][0] {
        offText,
          smallText,
          buttonText,
          saleName,
          salePara,
          "imageUrl": image1.asset->url,
          saleDuration 
      }`
      const data = await client.fetch(query)
      return data;
}

async function Sale() {
    const data = await getSaledata()
  return (
    <div className='max-container padding-container pb-10'>
        <div className='bg-red-600 rounded-2xl shadow-xl h-full flex flex-col lg:flex-row px-10 lg:py-0 py-5 justify-around'>
            <div className='flex flex-col justify-center '>
                <p className='text-[18px] font-medium text-white '>{data.offText}</p>
                <h1 className='xl:bold-70  md:bold-64 bold-40 lg:w-[300px] py-3 text-white'>FINE SMILE</h1>
                <p className='font-normal text-[0.9rem] text-white'>{data.saleDuration}</p>
            </div>
            <div className='lg:max-w-[450px] max-w-[200px] '>
                <img src={data.imageUrl} alt="" />
            </div>
            <div className='flex flex-col justify-center items-start gap-3 my-5'>
                <p className='font-normal text-white'>{data.smallText}</p>
                <h1 className='md:bold-64 bold-40 text-white'>{data.saleName}</h1>
                <p className='font-normal text-white text-[0.8rem]'>{data.salePara}</p>
                <Button variant={'secondary'} >
                    {data.buttonText}
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Sale