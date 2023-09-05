import React from 'react'
import NavbarSearch from './NavbarSearch'

function Navbar() {
  return (
    <nav className='w-full h-[12.5rem] bg-gradient-to-r from-[#574AE8] to-[#3EA1DB]'>
        <ul className='w-full flex flex-row items-center justify-between p-[1.25rem]'>
            <li>Codelândia</li>
            <li>blog</li>
        </ul>

        <NavbarSearch />
    </nav>
  )
}

export default Navbar