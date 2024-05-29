/* eslint-disable prettier/prettier */
'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import { siteConfig } from '@/config/site'

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)
  const links = siteConfig.navItems


  return (
    <header className='fixed top-0 w-full flex justify-between z-50 bg-white text-primary items-center'>

      <div className='sm:flex justify-between w-full items-center p-5 lg:px-24'>
        <div className='flex justify-between md:grow'>
          <a href='/'>
          <Image alt='' className=''
            height={100}
            src='/Logo.png'
            width={200}
          />
          </a>
          <button
            aria-expanded={isNavOpen}
            aria-label='abrir menu'
            className='sm:hidden'
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            abrir menu
          </button>
        </div>

        <nav className={`${isNavOpen ? 'stick right-0 left-0' : 'hidden'}  
          sm:block transition-all grow`}>
          <ul className='flex flex-col sm:flex-row justify-evenly items-center'>
            {links.map(item =>
              <li key={item.href}
                className='text-center w-full font-bold flex
             lg:font-semibold'
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <a aria-label={item.label}
                  className='border-b-2 p-2 border-transparent transition-all w-[100%] cursor-pointer grow
              sm:px-0 lg:text-xl'
                  href={item.href}>
                  {item.label}
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
