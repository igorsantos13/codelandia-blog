import React from 'react'
import { PiMagnifyingGlassThin } from 'react-icons/pi/'

function NavbarSearch() {
  return (
    <div className='w-full max-w-[#23.375rem] flex items-center justify-center'>

        <div className='absolute flex items-center justify-center w-[23.375rem] h-[2.5rem] rounded-sm bg-[#ffffff33] '>
          <PiMagnifyingGlassThin className='text-white w-[0.97656rem] h-[0.97656rem]  cursor-pointer'/>
        <input 
        type="text"
        
        placeholder='Pesquisar no blog' 
        className='px-6 py-2 bg-transparent outline-none'
        />

        </div>
    </div>
  )
}

export default NavbarSearch