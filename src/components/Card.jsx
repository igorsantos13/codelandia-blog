"use client"
import React, { useState } from 'react'
import SpanHeart from './SpanHeart'

function Card() {
  return (
    <div className='shadow-md mt-4 w-[23.375rem] h-[14.6875rem] bg-white rounded-md px-[1.25rem] py-4 md:w-[56.25rem] md:h-[12.1875rem]'>
        <div className='flex flex-row items-center justify-between w-full '>
                <span className='text-[#717171] text-base'>02 de Jul, 2021</span>
                <SpanHeart />
        </div>

            <div className='pt-6'>
                <h1 className='text-[#1A202C] text-2xl font-normal '>TÍTULO BLOG</h1>

                <p className='text-[#717171] py-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
            </div>
    </div>
  )
}

export default Card