import React from 'react'
import logo from '../assets/logo.jpg'
import { FaDroplet } from "react-icons/fa6";

function Header() {
  return (
        <header className='flex flex-row justify-between items-center p-3 h-16'>
            <div className='flex flex-row items-center'>
                <a href='/'><img src={logo} alt='logo Pingo de Gente' className='w-16 mr-8'/></a>
                <h1 className='mr-1'>Instituto Pingo de Gente</h1>
                <FaDroplet />
            </div>
            <div className='grid grid-cols-3 gap-4 p-2'>
                <a href='/' className='hover:text-sky-500 text-center'>Home</a>
                <a href='#sobre-nos' className='hover:text-sky-500 text-center'>Sobre Nós</a>
                <a href='/doar' className='hover:text-sky-500 text-center'>Doar</a>
            </div>
        </header>
  )
}

export default Header