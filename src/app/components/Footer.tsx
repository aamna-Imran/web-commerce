import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full flex justify-center flex-col items-center self-end pt-5 pb-10 bg-gray-200'>
        <p className='text-gray-800 text-[0.9rem]'>All Rights Are Reserved</p>
        <div className='flex gap-2 mt-2 text-[1.5rem]'>
        <FaTwitter />
        <RiInstagramFill />
        <FaFacebookSquare />
        </div>
    </div>
  )
}

export default Footer