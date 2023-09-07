import React, { useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia/'


function SpanHeart() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
        {isLiked ? (
            <span className='text-[#574AE8] text-2xl cursor-pointer' onClick={()=>setIsLiked(!isLiked)}><LiaHeartSolid/></span>
        ):(
            <span className='text-[#574AE8] text-2xl cursor-pointer' onClick={()=>setIsLiked(!isLiked)}><LiaHeart/></span>

        )}
    </>
  )
}

export default SpanHeart