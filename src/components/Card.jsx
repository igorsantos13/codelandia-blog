import React from 'react'
import { LiaHeart } from 'react-icons/lia/'

function Card() {
  return (
    <div className='shadow-md mt-4 w-[23.375rem] h-[14.6875rem] bg-white rounded-md px-[1.25rem] py-4'>
        <div className='flex flex-row items-center justify-between w-full'>
                <span className='text-[#717171]'>02 de Jul, 2021</span>
                <span className='text-[#1A202C] text-2xl'><LiaHeart/></span>
        </div>

            <div className='pt-6'>
                <h1 className='text-[#1A202C]'>TÍTULO BLOG</h1>

                <p className='text-[#717171] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
            </div>
    </div>
  )
}

export default Card