import React from 'react'
import Card from './Card'

function Main() {
  return (
    <div className='w-screen pb-2 pt-12 h-full gap-6 bg-[#F3F5F7] flex flex-col justify-evenly items-center'>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Main