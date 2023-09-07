import React from 'react'
import { PiMagnifyingGlassBold } from 'react-icons/pi/'

function NavbarSearch() {
  return (
    <div className='w-full max-w-[#23.375rem] mt-[2.56rem] flex items-center justify-center'>

        <div className='absolute flex items-center justify-center w-[23.375rem] h-[2.5rem] rounded-md bg-[#ffffff33] md:w-[56.25rem] md:h-[4.0625rem] md:flex md:items-center md:justify-start '>
          <PiMagnifyingGlassBold className='text-white w-[0.97656rem] h-[0.97656rem] -ml-20 md:ml-4 cursor-pointer md:w-[1.875rem] md:h-[1.875rem]'/>
        <input 
        type="text"
        
        placeholder='Pesquisar no blog' 
        className='px-6 py-2 -ml-2 bg-transparent outline-none placeholder:text-white placeholder:opacity-50'
        />

        </div>
    </div>
  )
}

export default NavbarSearch