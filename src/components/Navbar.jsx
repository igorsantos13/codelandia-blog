import React from 'react'
import NavbarSearch from './NavbarSearch'

function Navbar() {
  return (
    <nav className='w-full h-[12.5rem] bg-gradient-to-r from-[#574AE8] to-[#3EA1DB] md:h-[15.625rem] md:flex md:flex-col  md:items-center'>
      <div className='md:flex md:flex-col md:justify-center gap-20 md:items-center md:w-[56.25rem] md:h-[15.625rem]'>
        <ul className='w-full flex flex-row items-center justify-between pt-12 p-[1.25rem] md:p-0 md:m-0'>
            <li className='font-bold'>Codelândia</li>
            <li className='font-bold'>blog</li>
        </ul>

        <NavbarSearch />

      </div>
    </nav>
  )
}

export default Navbar