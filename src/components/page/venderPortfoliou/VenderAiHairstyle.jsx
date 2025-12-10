import React from 'react'
import { BsMagic } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { LuShare } from "react-icons/lu";

const VenderAiHairstyle = () => {
  return (
    <div className='p-3'>
      <div className='flex justify-between p-2'>
            <p className='flex gap-2 items-center font-medium text-2xl'> <BsMagic  className='text-[var(--primary)]'/> AI Hairstyle Recommender</p>
            <p className='flex gap-2 items-center'> <IoEyeOutline /> Toggle Feature</p>
      </div>
      <div className='bg-[var(--secondary)]'>
    <div className='flex justify-center'>
        <div className='text-center p-3'>
        <div  style={{ background: "var(--primary-gradient)" }} className='h-20 w-20 rounded-full  flex justify-center items-center mx-auto mt-5'><BsMagic className='text-white font-medium text-3xl'/></div>
        <p className='font-semibold text-xl pt-3'>Try Hairstyles on Your Face</p>
        <p className='pt-3'>Upload your photo and let our AI suggest the perfect hairstyles for you. Preview </p>
        <button className='border border-purple-500 text-purple-600 px-5 py-2 rounded-lg text-xl hover:bg-purple-50 flex gap-2 items-center mt-4 mx-auto bg-[#D4C2F7]'><LuShare/> Upload Your Photo</button>
    </div>
    </div>
    <div className='grid md:grid-cols-3 gap-8 mt-4'>
      <div className='flex justify-center'>
          <img className='w-70  rounded' src="https://i.pinimg.com/736x/2f/2c/04/2f2c048a121ce8cb913bc70856f92e62.jpg" alt="" />
      </div>
      <div className='flex justify-center'>
               <img className='w-70  rounded' src="https://i.pinimg.com/736x/2f/2c/04/2f2c048a121ce8cb913bc70856f92e62.jpg" alt="" />
      </div>
     
     <div className='flex justify-center'>
         <img className='w-70  rounded' src="https://i.pinimg.com/736x/2f/2c/04/2f2c048a121ce8cb913bc70856f92e62.jpg" alt="" />
     </div>
       
    </div>
      </div>
    </div>
  )
}

export default VenderAiHairstyle
